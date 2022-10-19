const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const router = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);

router.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/pages/index.html`));
  
});

router.post("/welcome", (req, res) => {
  res.render(path.join(`${__dirname}/pages/welcome.html`), {
    name: req.body.name,
  });
});

app.use("/", router);
app.listen(process.env.port || 3000);


