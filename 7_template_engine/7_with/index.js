const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");



app.get("/", function (req, res) {
  const user = {
    name: "Moises",
    surname: "Sutil",
  };

  const approved = false

  res.render("home", { user: user, auth: true, approved });
});

app.get("/dashboard", function (req, res) {
  const items = ['item a', 'item b', 'item c']

  res.render("dashboard", {items});
});

app.get("/post", function (req, res) {
  const post = {
    title: "Aprender Node.js",
    category: "Node.js",
    body: "Node.js é muito utilizado na programação hoje em dia",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.listen(3000);