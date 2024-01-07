const Employee = require('../models/employeeModel');

const insertEmployee = async(req,res)=>{
    try {
        const employee = new Employee({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile
        });
        const data = await employee.save();
        res.send(data);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports ={insertEmployee} ;