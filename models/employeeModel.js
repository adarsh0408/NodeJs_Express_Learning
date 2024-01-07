const mongoose = require('mongoose');

const employee = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:String
    },
    password:{
        type:String,
        required:true
    }
})

const Employee = mongoose.model("Employee",employee);

module.exports = Employee;