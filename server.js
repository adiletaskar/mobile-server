const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
require("dotenv").config();
const connectDB = require("./db/connect");
//middleware
app.use(bodyParser.json());
app.use(express.json());

//routes
app.use("/users", userRouter);

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello its a Adilet's projects server side");
});

app.get("/images/:imageName", (req, res) => {
  const { imageName } = req.params;
  const url = path.join(__dirname, `/images/${imageName}`);
  res.sendFile(url);
});

port = 8080;

//start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
