const express = require('express');
const mongoose = require('mongoose');
const employeeRoute = require('./routes/employeeRoutes');

const app = express();
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000;

app.use('/',employeeRoute)


app.listen(port,()=>{
    console.log("Server is running on port",port);
});