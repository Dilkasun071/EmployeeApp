const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employee');
const errorController = require('./controllers/error');
const app = express();
const ports = process.env.PORT || 3000;

app.use(cors({ origin:'http://localhost:4200'}));
app.use(bodyparser.json()); 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/auth', authRoutes);
app.use('/employees', employeeRoutes);

app.use(errorController.get404);
app.use(errorController.get500);
app.listen(ports, () => console.log(`Listening on port ${ports}`));
