const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static('public'))

const items = [
  {
    marca: 'Nike',
    produto: 'Tenis'
  },
  {
    marca: 'Adidas',
    produto: 'Tenis'
  },
  {
    marca: 'Lacoste',
    produto: 'Camisa'
  }
]

app.get("/", function (req, res) {

  res.render("home", {items});
});

app.listen(3000);