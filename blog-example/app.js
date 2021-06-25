const express = require("express");
const http = require("http");
const path = require("path");

let app = express();
const server = http.createServer(app);

app.set("appName", "hello-advanced");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//This is where the middleware will go 

app.all("*", (req, res) => {
    res.render("index", 
    {msg: "Welcome to Practical Node.js!"});
});

const boot = () => {
    server.listen(app.get("port"), () => {
        console.info(`Express server listening on port ${app.get("port")}`);
    });
};

const shutdown = () => {
    server.close();
};

if (require.main === module) {
    boot();
} else {
    console.info("Running app as module");
    exports.boot = boot;
    exports.shutdown = shutdown;
    exports.port = app.get("port");
}
//I did way too much work today getting mongodb installed to not get credit for it so im doing this cause I'm petty