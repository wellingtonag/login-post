var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);

app.use("/", router);
var port = process.env.PORT || 3000;
app.listen(port);
// app.listen(process.env.port || 3000);
console.log("Servidor de exemplo aberto na porta: 3000");

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "src", "pages", "index.html"));
});

router.post("/welcome", (req, res) => {
  res.render(path.join(__dirname, "./", "src", "pages", "welcome.html"), {
    name: req.body.name,
  });
});

module.exports = router;
