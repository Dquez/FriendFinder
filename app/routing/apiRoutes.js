let friendsData = require("../data/friends");
// var waitListData = require("../data/waitinglistData");

module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        res.send("hello friends");
    });
    app.post("/api/friends", function (req, res) {
        // Determine whether user is match or not
        // req.body is available since we're using the body-parser middleware
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
    // app.post("/api/clear", function () {
    //     // Empty out the arrays of data
    //     tableData = [];
    //     waitListData = [];

    //     console.log(tableData);
    // });
};