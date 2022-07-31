var express = require('express');
var router = express.Router();
var connection = require('../config/db')
var _ = require('lodash');
var Promise = require('promise');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function (req, res, next) {
  let query1 = "select * from finance_details"
  connection.query(query1, (err, rows1, fields) => {
    if (err) {
      console.log(err);
      res.json({ status: false, massage: "Some think went wrong" });
    }
    else {
      res.json(rows1)
    }
  })
})
router.post('/inx', function (req, res, next) {
  let query2 = "INSERT INTO finance_details  VALUES (null,'" + req.body.client_name + "','" + req.body.mobile_no + "','" + req.body.mail_address + "','" + req.body.address + "','" + req.body.area + "','" + req.body.attend + "','" + req.body.follow_up_date + "','" + req.body.description + "')";
  connection.query(query2, (err, rows2, fields) => {
    if (err) {
      console.log(err);
      res.json({ status: false, massage: "Some think went wrong " });
    }
    else {
      console.log('The solution is: ', rows2);
      res.json(rows2)
    }
  })
})
router.delete('/del/:id', function (req, res, next) {
  let query3 = "Delete from finance_details where id='" + req.params.id + "'";
  connection.query(query3, (err, rows3, fields) => {
    if (err) {
      console.log(err);
      res.json({ status: false, massage: "Some think went wrong " });
    }
    else {
      console.log('The solution is: ', rows3);
      res.json(rows3)
    }
  })
})

router.post('/update/:id', function (req, res, next) {
  console.log(req.body)
  // return
  // if (req.body.email && req.body.password) {
  let query4 = "UPDATE finance_details SET client_name='" + req.body.client_name + "',mobile_no='" + req.body.mobile_no + "',mail_address='" + req.body.mail_address + "',address='" + req.body.address + "',area='" + req.body.area + "',attend='" + req.body.attend + "',follow_up_date='" + req.body.follow_up_date + "',description='" + req.body.description + "' WHERE id='" + req.params.id + "'";

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

router.post('/attend/:id', function (req, res, next) {
  console.log(req.body)
  // return
  // if (req.body.email && req.body.password) {
  let query4 = "UPDATE finance_details SET attend=" + req.body.attend + ",follow_up_date='" + req.body.follow_up_date + "',description='" + req.body.description + "' WHERE id='" + req.params.id + "'";

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

router.post('/bulkUpdate', function (req, res, next) {
  try {
    const data = req.body
    console.log(req.body[0]);
    // const abc = [req.body[0], req.body[1]]
    const data_chunk = _.chunk(data, 100);
    let i = -1
    function q() {
      i++
      if (data_chunk.length == i) {
        let count = data.length
        return res.json({ status: true, massage: "Total Count Inserted :-" + count })
      }
      else {
        Promise.all(bulkInsert(data_chunk[i])).then(data => {
          q()
        }).catch(e => {
          console.log("error", e);
          return res.json({ status: false })
        })
      }
    }
    q()

  }
  catch (e) {
    console.log(e);
  }

  function bulkInsert(data) {
    return new Promise((resolve, reject) => {
      console.log('a');
      let sql = data.map(item => `("${item.client_name}", "${item.address}", "${item.mobile_no}","${0}")`)

      const finalQuery = "INSERT INTO finance_details (client_name, address, mobile_no,attend) VALUES " + sql
      console.log(finalQuery);
      connection.query(finalQuery, (err, rows2, fields) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        else {
          console.log('The solution is: ', rows2);
          // res.json(rows2)
          resolve(rows2);
        }
      });

    });
  }
})

module.exports = router;