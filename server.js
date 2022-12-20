const express = require("express");
const products = require("./data");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/api/products", function (req, res) {
  const { title } = req.query;
  const sortedProducts = products.filter((product) =>
    product.name.includes(title.toLowerCase())
  );
  if (sortedProducts.length > 0) {
    return res.json({ success: true, data: sortedProducts });
  }
  res.json({ success: false });
});

app.get("/images/:imageName", (req, res) => {
  const { imageName } = req.params;
  const url = path.join(__dirname, `/images/${imageName}`);
  res.sendFile(url);
});

app.listen(3454, () => {
  console.log("server is listening");
});
