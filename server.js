const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/meals/india", (req, res) => {
  res.status(200).json({ data });
});

app.listen(4000, (req, res) => {
  console.log(`Server running on port 4000`);
});
