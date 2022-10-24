const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);

app.use("/", router);
app.listen(process.env.port || 3000);
console.log("Servidor de exemplo aberto na porta: 3000");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/", "src", "pages", "index.html"));
});

router.post("/welcome", (req, res) => {
  res.render(path.join(__dirname, "/", "src", "pages", "welcome.html"), {
    name: req.body.name,
  });
});

module.exports = router;
