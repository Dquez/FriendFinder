const path = require('path');
module.exports = function (app) {
    // when the user hits the /survey route, the server sends the survey.html file in the public directory
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // A default, catch-all route that leads to home.html which displays the home page.
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

