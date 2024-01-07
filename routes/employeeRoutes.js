const express = require('express');
const employeeController = require('../controller/employeeController');

const app = express();
app.use(express.json());

app.post('/register',employeeController.insertEmployee);

module.exports = app;