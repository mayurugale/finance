var express = require('express');
var router = express.Router();
var connection = require('../config/db')

router.post('/login', function (req, res, next) {
  if (req.body.email && req.body.password) {
    let query = "select * from login where email =\"" + req.body.email + "\" and  password = \"" + req.body.password + "\""
    console.log(query);
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.json({ status: false, massage: "Some think went wrong " });
      }
      else {
        if (rows.length && rows.length == 1) { res.json({ status: true, massage: "login successfully", data: rows[0] }); }
        else { res.json({ status: false, massage: "Invalid login details" }); }
      }
    })
  }
  else {
    res.json({ status: false, massage: "invalid details " });
  }
})

module.exports = router;
