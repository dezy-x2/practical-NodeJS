const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const { title } = require("process");

const data = {
    title: "practical node.js",
    author: "@azatmardan",
    tags: ["express", "node", "javascript"]
};

data.body = process.argv[2];
const filePath = path.join((__dirname, "handlebars-example.html"));

data.tableData = [
    {name: "express", url: "http://expressjs.com/"},
    {name: "hapi", url: "http://spumko.github.io/"},
    {name: "compound", url: "http://compoundjs.com/"},
    {name: "derby", url: "http://derbyjs.com/"}
];

fs.readFile(filePath, "utf-8", (err, source) => {
    if (err) return console.error(err);

    //Register helper to generate HTML from data (array)
    handlebars.registerHelper("table", data => {
        let str = "<table>";
        for (let i=0; i<data.length; i++) {
            str += "<tr>";
            for(let key in data[i]) {
                str += "<td>" + data[i][key] + "</td>";
            };
            str += "</tr>";
        };
        str += "</table>";
        return new handlebars.SafeString(str);
    });


    handlebars.registerHelper("custom_title", title => {
        let words = title.split(" ");
        for (let i=0; i<words.length; i++) {
            if (words[i].length > 4) {
                words[i] = words[i][0].toUpperCase + words[i].substr(1);
            };
        };
        title = words.join(" ");
        return title;
    });

    const template = handlebars.compile(source);
    const html = template(data);
    console.log(html);
});