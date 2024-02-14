var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();
var port = 3000;
app.get("/", (req, res) => {
  if (req == "/") {
    fs.readFile("index.html", (err, html) => {
      //sleep(20000);
      //async.res.write(html);
      res.write(html);
      sleep(5000);
      res.end();
    });
  }
});

app.listen(port, () => {
  console.log("node.js server at port 3000");
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
