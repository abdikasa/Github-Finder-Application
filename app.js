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
                }else{
                    //Show user's profile.
                    interface.showProfile(data.profileData);
                }
            })
    }else{
        //clear profile
    }
})