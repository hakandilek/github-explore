var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    timeout: 5000,
    headers: {
        "user-agent": "hakandilek/github-explore" 
    }
});
github.user.getFollowingFromUser({
    user: "hakandilek"
}, function(err, res) {
    console.log(JSON.stringify(res));
});