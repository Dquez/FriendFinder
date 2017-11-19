module.exports = function (app) {
    let friendsData = require("../data/friends");
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    //Create new friend
    app.post("/api/friends", function (req, res) {

        // //Empty array to push matched friend
        // let bestFriend = {
        //     name: "",
        //     photo: "",
        //     friendDifference: 1000
        // };
        // console.log(req.body);
        let userData = req.body;
        // let userScores = userData.scores;
        // let totalDifference = 0;

        // //Loop through friends object and compare
        // for (let i = 0; i < friendsData.length; i++) {

        //     totalDifference = 0;

        //     //Loop through the scores of each friend
        //     for (let j = 0; j < friendsData[i].scores[j]; j++) {
        //         //calculating the difference between each score and sum them into totalDifference
        //         totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

        //         //Find best friend match
        //         if (totalDifference <= bestFriend.friendDifference) {

        //             bestFriend.name = friendsData[i].name;
        //             bestFriend.photo = friendsData[i].photo;
        //             bestFriend.friendDifference = totalDifference;

        //         }
        //     }
        // }
        friendsData.push(userData);
        console.log(friendsData);

        // res.json(bestFriend);
    });

}