module.exports = function (app) {
    console.log("connected");
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/api", function (req, res) {
        res.send("API JSON");
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
