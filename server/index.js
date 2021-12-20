const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

//Home

app.get("/", (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

//Post

app.post("/api/create", (req, res) => {
  console.log(req.body);
  // db.query(
  //   "INSERT INTO posts (title, post_text, user_name) VALUES (user, title, text)",
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(result);
  //   }
  // );
});

// Port

const PORT = 8000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
