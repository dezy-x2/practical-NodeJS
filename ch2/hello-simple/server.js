const express = require("express");
const app = express();

app.all("*", (req, res) => {
    res.send("Welcome to Preactical Node.js!");
});

app.listen(3000, () => {
    console.log("Open at localhost:3000");
});