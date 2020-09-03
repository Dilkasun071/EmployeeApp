const db = require('../config/db');

module.exports = class Employee {
  constructor(empId, empName, empEmail, empPassword, empPhoto, empAddress, empBranchId) {
    this.empId = empId;
    this.empName = empName;
    this.empEmail = empEmail;
    this.empPassword = empPassword;
    this.empPhoto = empPhoto;
    this.empAddress = empAddress;
    this.empBranchId = empBranchId;
  }

  static find(empEmail) {
    return db.execute('SELECT * FROM employee WHERE emp_email = ?', [empEmail]);
  }

  static save(employee) {
    return db.execute(
      'INSERT INTO `employee` (`emp_id`, `emp_name`, `emp_email`, `emp_photo`, `emp_address`, `emp_branch_id`, `emp_password` ) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [employee.empId, employee.empName, employee.empEmail, employee.empPhoto, employee.empAddress, employee.empBranchId, employee.empPassword ]
    );
  }

};