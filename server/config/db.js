const mysql = require("mysql");

// 每次call db 都會import 呢個file，每一次create instance 係呢個file
// 都會等於下邊個DB object

// Schema
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "blogpost",
});

//export Module
module.exports = db;
