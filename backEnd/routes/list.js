var express = require('express');
var router = express.Router();
var connection = require('../config/db')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function (req, res, next) {
    // if (req.body.email && req.body.password) {
    let query1 = "select * from finance_details"
    console.log(query1);
    connection.query(query1, (err, rows1, fields) => {
      if (err) {
        console.log(err);
        res.json({ status: false, massage: "Somthink went wrong " });
      }
      else {
        console.log('The solution is: ', rows1);
        res.json(rows1)
      }
    })
    // }
    //  else {
    //   res.json({ status: false, massage: "invalid deatils " });
    // }
  
  })
  router.post('/inx', function (req, res, next) {
    console.log(req.body)
    // return
    // if (req.body.email && req.body.password) {
    let query2 = "INSERT INTO finance_details  VALUES (null,'" + req.body.client_name + "','" + req.body.mobile_no + "','" + req.body.mail_address + "','" + req.body.address + "','" + req.body.area + "','" + req.body.attend + "','" + req.body.follow_up_date + "','" + req.body.description + "')";
  
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
  router.delete('/del/:id', function (req, res, next) {
    console.log(req.params.id)
    //return
    // if (req.body.email && req.body.password) {
    let query3 = "Delete from finance_details where id='"+ req.params.id +"'";
  
    console.log(query3);
    connection.query(query3, (err, rows3, fields) => {
      if (err) {
        console.log(err);
        res.json({ status: false, massage: "Somthink went wrong " });
      }
      else {
        console.log('The solution is: ', rows3);
        res.json(rows3)
      }
    })
    // }
    //  else {
    //   res.json({ status: false, massage: "invalid deatils " });
    // }
  
  })
  

  router.put('/update/:id', function (req, res, next) {
    console.log(req.body)
    // return
    // if (req.body.email && req.body.password) {
    let query4 = "UPDATE finance_details SET client_name='"+ req.body.client_name +"',mobile_no='"+ req.body.mobile_no +"',mail_address='"+ req.body.mail_address +"',address='"+ req.body.address +"',area='"+ req.body.area +"',attend='"+ req.body.attend +"',follow_up_date='"+ req.body.follow_up_date +"',description='"+ req.body.description +"' WHERE id='"+ req.params.id +"'";
  
    console.log(query4);
    connection.query(query4, (err, rows4, fields) => {
      if (err) {
        console.log(err);
        res.json({ status: false, massage: "Somthink went wrong " });
      }
      else {
        console.log('The solution is: ', rows4);
        res.json(rows4)
      }
    })
    // }
    //  else {
    //   res.json({ status: false, massage: "invalid deatils " });
    // }
  
  })

module.exports = router;