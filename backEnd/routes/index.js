var express = require('express');
var router = express.Router();
var connection = require('../config/db')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', function (req, res, next) {
  res.json({ status: true });
})


router.post('/login', function (req, res, next) {
  if (req.body.email && req.body.password) {
    let query = "select * from login where email =\"" + req.body.email + "\" and  password = \"" + req.body.password + "\""
    console.log(query);
    connection.query(query, (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.json({ status: false, massage: "Somthink went wrong " });
      }
      else {
        if (rows.length && rows.length == 1) { res.json({ status: true, massage: "login succesfuly", data: rows[0] }); }
        else { res.json({ status: false, massage: "Invalid login datails" });}
      }
    })
  }
  else {
    res.json({ status: false, massage: "invalid deatils " });
  }
})


router.post('/inx', function (req, res, next) {
  console.log(req.body)
  // return
  // if (req.body.email && req.body.password) {
  let query2 = "INSERT INTO teacher_master  VALUES (null,'" + req.body.teacher_name + "','" + req.body.class + "','" + req.body.mb_no + "')";

  console.log(query2);
  connection.query(query2, (err, rows2, fields) => {
    if (err) {
      console.log(err);
      res.json({ status: false, massage: "Somthink went wrong " });
    }
    else {
      console.log('The solution is: ', rows2);
      res.json(rows2)
    }
  })
  // }
  //  else {
  //   res.json({ status: false, massage: "invalid deatils " });
  // }

})

module.exports = router;
