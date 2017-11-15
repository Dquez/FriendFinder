//Set your dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.get("/", function (req, res) {
    res.send("Hello world");
});




module.exports = function (app) {
    console.log("connected");
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/", function (req, res) {
        res.send("Hello world");
    })
    // app.get('/', function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    //     console.log("hello");
    // });

    // app.get("/tables", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/tables.html"));
    // });

    // app.get("/reserve", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/reserve.html"));
    // });

    // If no matching route is found default to home
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });
};

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.