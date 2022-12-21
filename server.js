const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const productRouter = require("./routes/products");
app.use(bodyParser.json());

app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Hello its a Adilet's projects server side");
});

app.get("/images/:imageName", (req, res) => {
  const { imageName } = req.params;
  const url = path.join(__dirname, `/images/${imageName}`);
  res.sendFile(url);
});

app.listen(3454, () => {
  console.log("server is listening");
});
