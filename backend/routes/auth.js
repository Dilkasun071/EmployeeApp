const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);

router.post(
    '/signup',
    [
      body('empId').not().isEmpty(),
      body('empName').trim().not().isEmpty(),
      body('empEmail').trim().not().isEmpty(),
      body('empPassword').trim().isLength({ min: 5 }),
      body('empPhoto').trim().not().isEmpty(),
      body('empAddress').trim().not().isEmpty(),
      body('empBranchId').not().isEmpty(),
    ],
    authController.signup
  );
  
module.exports = router;