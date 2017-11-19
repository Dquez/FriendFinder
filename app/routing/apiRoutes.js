module.exports = function (app) {
    let friendsData = require("../data/friends");
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    //Create new friend
    app.post("/api/friends", function (req, res) {
        let userData = req.body;

        friendsData.push(userData);
        console.log(friendsData);
    });

}