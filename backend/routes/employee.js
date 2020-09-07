const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const config = require('../config/db');
const List = require('../models/list');

router.get('/list', (req,res) => {
    const sql = `SELECT e.emp_id,e.emp_name,e.emp_email,e.emp_photo,b.branch_name,k.bank_name FROM employee e, branch b, bank k WHERE e.emp_branch_id=b.branch_id AND b.bank_id = k.bank_id`;
    config.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }else{
            res.send(results);
        }
      }); 
});

module.exports = router;