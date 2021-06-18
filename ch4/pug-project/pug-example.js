const pug = require("pug");
const fs = require("fs");

let data = {
    title: "Practal Node.js",
    author: {
        twitter: "@azatmardan",
        name: "Azat"
    },
    tags: ["express", "node", "javascript"]
};

data.body = process.argv[2];

pug.renderFile("pug-example.pug", data, (err, html) => {
    console.log(html);
});