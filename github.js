
class Github {
    constructor() {
        this.client_id = '482239bd3c8a3292fc9e';
        this.client_secret = '003ac38c7bbbc68e993eff1041fc8ef3f88c27b1';
    }
    //Must add client id and client secret to the link inside the get method.
    async get(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secret}`);

        const profileData = await profileResponse.json();

        //return object
        return {
            profileData
        }
    }

    async getRepos(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}/repos`);
        const profileData = await profileResponse.json();
        return {
            profileData
        }
    }
}