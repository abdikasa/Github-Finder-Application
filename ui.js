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

    showRepos(repos) {
        let reposDOM = document.querySelector('.repos');
        let output = '';

        repos.forEach((repo) => {
        output += `<div class="card card-body mb-2"> 
                    <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Forks: ${repo.forms_count}</span>
                        <span class="badge badge-secondary">:Stars ${repo.stargazers_count}</span>
                        <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                    </div>
                    </div>
                    </div>
                 `
        })

        //loop ends, append to dom
        reposDOM.innerHTML = output;
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
        if (div) {
            div.remove();
        }
    }





}