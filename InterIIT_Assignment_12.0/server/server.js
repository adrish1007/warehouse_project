require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const customer_routes = require("./routes/route.js");
const cors = require("cors");
const mongoose = require("mongoose");

//express app
const app = express();
const port = process.env.PORT || 4000;
const dbURI = process.env.MONG_URI;

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);

//routes
app.use("/db", customer_routes);

app.get("/", (req, res) => {
  res.send(
    "This is the Backend Server of the Dashboard Site. Visit the desired URLs in the code to see its working"
  );
});

// connecting to mongoDB Atlas server
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port);
    console.log(`Server Running On Port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
