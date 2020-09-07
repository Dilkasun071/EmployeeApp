const db = require('../config/db');

module.exports = class List {
  constructor(empId, empName, empEmail, empPhoto, branchName, bankName) {
    this.empId = empId;
    this.empName = empName;
    this.empEmail = empEmail;
    this.empPhoto = empPhoto;
    this.branchName = branchName;
    this.bankName = bankName;
  }

  static fetchAll() {
    return db.execute('SELECT e.emp_id,e.emp_name,e.emp_email,e.emp_photo,b.branch_name,k.bank_name FROM employee e, branch b, bank k WHERE e.emp_branch_id=b.branch_id AND b.bank_id = k.bank_id');
  }
  
};