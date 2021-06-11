const express = require("express");
const http = require("http");
const path = require("path");

let app = express();

app.set("appName", "hello-advanced");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//This is where the middleware will go 

app.all("*", (req, res) => {
    res.render("index", 
    {msg: "Welcome to Practical Node.js!"});
});

http.createServer(app).listen(app.get("port"), () => {
        console.log(`Express.js server is listening on port ${app.get("port")}`)
    }
);

