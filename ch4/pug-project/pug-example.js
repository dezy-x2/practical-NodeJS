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

fs.readFile("pug-example.pug", "utf-8", (err, source) => {
    let template = pug.compile(source);
    let html = template(data);
    console.log(html);
});