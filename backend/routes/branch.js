const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const config = require('../config/db');

router.get('/id', (req,res) => {
    const sql = 'SELECT branch_id,branch_name FROM `branch`';
    config.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }else{
            res.send(results);
        }
      }); 
});

module.exports = router;