class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Display Profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list -group-item">Company: ${user.company}</li>
                <li class="list -group-item">Website: ${user.blog}</li>
                <li class="list -group-item">Location: ${user.location}</li>
                <li class="list -group-item">Member Since: ${user.created_at}</li>
                </ul>
             </div> 
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div class="repos"></div>
    `
    }

    addRepos(array) {
        let list = document.querySelector('.repos');
        let output = '';

        array.forEach((obj) => {
            output+=`<li>Name: ${obj.name} --- <a href="${obj.url}" target="_blank">Got to repo</a> --- Language: ${obj.lang}</li>`
        })
        list.innerHTML = output;     

    }




    //Clear the profile section.
    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message, classname) {
        this.clearAlerts();
        const div = document.createElement("div");
        div.className = classname;
        div.appendChild(document.createTextNode(message));

        const parent = document.querySelector('.searchContainer');

        const alertAfter = document.querySelector('.search');

        parent.insertBefore(div, alertAfter);
        //This line reads like english
        //parent ==> div ===> alertAfter.

        
        // setTimeout(() => {
        //     this.clearAlerts();
        // }, 3000)
    }

    clearAlerts() {
        const div = document.querySelector('.alert');
        //if div exists, delete it.
        if(div){
            div.remove();
        } 
    }





}