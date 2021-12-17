const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3000;

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
