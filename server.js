const express = require("express");
const app = express();

app.get("*", function (req, res) {
  res.send("Hello World");
});

app.listen(3454, () => {
  console.log("server is listening");
});
