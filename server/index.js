const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

//Home

// Get data
app.get("/api/get", (req, res) => {
  // res.json({ msg: "This is CORS-enabled for all origins!" });
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  console.log(req.params);
  let { id } = req.params;
  console.log(id);
  db.query("SELECT * FROM posts WHERE id = (?)", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
});

//Post

app.post("/api/create", (req, res) => {
  // console.log(req.body);
  const user = req.body.user;
  const title = req.body.title;
  const post = req.body.post;
  // console.log(user + title + post);
  db.query(
    "INSERT INTO posts (user_name, title, post_text) VALUES (?, ?, ?)",
    [user, title, post],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

//likes post

app.post("/api/like/:id", (req, res) => {
  // console.log(req.params);
  let { id } = req.params;
  // console.log(id);

  db.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Port

const PORT = 8000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
