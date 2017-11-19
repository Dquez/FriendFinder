module.exports = function (app) {
    // a generic page that holds all of our new friends (or hard coded friends already in the file)
    let friendsData = require("../data/friends");
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });
    //Create new friend
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        friendsData.push(newFriend);
        // initialize bestfriend for later use in the compare algorithm
        let bestFriend = {
            name: "",
            photo: "",
            matchMakerPoints: 0
        };
        // Total point difference (if theres a friend with all 5s, and another with all 1s)
        let bestFriendPoints = 40;
        friendsData.forEach(function(friend){
            // catches the current newFriend from entering the algorithm
            if (friend.name == newFriend.name) {
                return;
            }
            // Accumulator points for each newFriend, the lower the number, the higher chance they have at being the best friend
            let matchMakerPoints = 0;
            for (let i = 0; i < friend.scores.length; i ++) {
                // takes the absolute value of the newFriends score at the same index of the current friends in the array ("database")
                let absSum = Math.abs(parseInt(newFriend.scores[i]) - friend.scores[i]);
                matchMakerPoints += absSum;
                // adds each abs val to matchmaker
            }
            if (matchMakerPoints < bestFriendPoints) {
                // if the matchmakerPoints is lower than the bestPoints, this is the new Best Friend and the bestFriend points becomes the matchmakerPoints for the remainder of the friends.scores unless someone is a closer match. 
                bestFriend.name = friend.name;
                bestFriend.photo = friend.photo;
                bestFriend.matchMakerPoints = matchMakerPoints;
                bestFriendPoints = matchMakerPoints;
            }
        });
        // sends bestFriend as json data as a response back to the client/user, which will be picked up from a callback on the front-end
        res.json(bestFriend);
    });
}
