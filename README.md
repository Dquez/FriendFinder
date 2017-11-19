# FriendFinder

## Overview

In this project, I created app that matches you with a new best friend based on a questionnaire. The app performs multiple functions on the back end, including routing the user based on the url endpoint they request, and comparing each score (question value) against the other existing friends. The user also has the option to view the JSON of all friends currently in the *database* , or in this case a file on the backend.

## How I built it

I primarily worked with node.js and the express frame work to handle routing, connecting to the server and sending files to the front end. On the front end, I used html, some javascript, jQuery and a little bit of css. There is still room for improvement including styling the home and survey page, adding some interactivity between clicking buttons and just updating the overall aesthetic. I could also transfer all the friends onto a database for persistent data. I included the following packages:
* [express](https://www.npmjs.com/package/inquirer)
* [bodyParser](https://www.npmjs.com/package/cli-table)
* [path](https://www.npmjs.com/package/path) *Built in to node*


Running an npm install should install all of the dependencies you need to get this project started.

**Refer to FriendFinder file in this repo for the quick demostration of this app or open the deployed app on heroku**

[FriendFinder](https://friend-finder-080817.herokuapp.com)