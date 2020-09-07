const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Employee = require('../models/employee');

exports.login = async (req, res, next) => {
  const empEmail = req.body.empEmail;
  const empPassword = req.body.empPassword;
  
  try {
    const EmployeeDetails = await Employee.find(empEmail);
    if (EmployeeDetails[0].length !== 1) {
      const error = new Error('A Employee with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }
    const storedEmployee = EmployeeDetails[0][0].emp_password;
    const isEqual = await bcrypt.compare(empPassword, storedEmployee);
    if (!isEqual) {
      const error = new Error('Wrong password!');
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        empEmail: storedEmployee.empEmail,
        empId: storedEmployee.empId,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, empId: storedEmployee.empId });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return;
  const empId = req.body.empId;
  const empName = req.body.empName;
  const empEmail = req.body.empEmail;
  const empPassword = req.body.empPassword;
  const empPhoto = req.body.empPhoto;
  const empAddress = req.body.empAddress;
  const empBranchId = req.body.empBranchId;

  try {
    const hashedPassword = await bcrypt.hash(empPassword, 12);
    const employeeDetails = {
      empId:empId,
      empName: empName,
      empEmail: empEmail,
      empPassword: hashedPassword,
      empPhoto: empPhoto,
      empAddress: empAddress,
      empBranchId: empBranchId
    };

    const result = await Employee.save(employeeDetails);

    res.status(200).json({ message: 'Employee registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

