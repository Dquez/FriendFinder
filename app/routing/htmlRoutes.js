//Set your dependencies here.
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
const path = require('path');

module.exports = function (app) {
    

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // A default, catch-all route that leads to home.html which displays the home page.
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
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

