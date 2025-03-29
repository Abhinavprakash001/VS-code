const fs = require("fs");

const contents = fs.readFileSync("a.text", "utf-8");
console.log(contents);