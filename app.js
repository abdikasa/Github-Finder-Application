const github = new Github;
const interface = new UI;

const findUser = document.getElementById('searchUser');

findUser.addEventListener("keyup", (e) => {
    const user = e.target.value;   //get the user's keyed value.
    if (user.trim().length > 0) {   //If the length of the input > 0

        //Make an http call.
        //console.log(github.get(user)); return a promise.
        github.get(user)
            .then(data => {
                //check for error
                if (data.profileData.message === 'Not Found') {
                    //Show error
                    interface.showAlert(data.profileData.message, 'alert alert-danger')
                } else {
                    //Show user's profile.
                    interface.clearAlerts();
                    interface.showProfile(data.profileData);
                    github.getRepos(user)
                        .then(data => {
                            let dataArray = data.profileData;

                            let newArray = dataArray.map((item) => {
                                let output = {};
                                output.url = item.html_url;
                                output.name = item.name;
                                output.lang = item.language;
                                return output;
                            })
                            console.log(newArray);
                            interface.addRepos(newArray);
                        });
                }
            })
    } else {
        //clear profile
        interface.clearProfile();
    }
})