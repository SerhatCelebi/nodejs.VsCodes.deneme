const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.static("node_modules"));
app.set("view engine", "ejs");
app.use("/", function (req, res) {
  res.render("index");
});
/*app.use("/", function (req, res) {
  fs.readFile("index.html", (err, html) => {
    //sleep(20000);
    //async.res.write(html);
    res.send(html);
    sleep(5000);
    //res.end();
  });
});
*/
/*app.get("/", (req, res) => {
  if (req == "/") {
    fs.readFile("index.html", (err, html) => {
      //sleep(20000);
      //async.res.write(html);
      res.write(html);
      sleep(5000);
      res.end();
    });
  }
});*/

app.listen(port, () => {
  console.log("node.js server at port 3000");
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
