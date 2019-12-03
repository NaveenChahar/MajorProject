const express=require('express');
const studentRoutes=express.Router();
const studentCrud=require('../../db/crudOperations/studentCrud');


studentRoutes.post('/signUp',(req,res)=>{
    console.log(req.body)
    //res.json({msg:'task completed'})
    var obj={
        id:null,
        type:null,
        name:null,
        email:null,
        passord:null,
        rollno:null
    }
    obj.name=req.body.name;
    obj.email=req.body.email;
    obj.password=req.body.password;
    obj.rollno=req.body.rollno;
    if(obj.name&&obj.password&&obj.email&&obj.rollno){
        studentCrud.signUp(res,obj);
    }
    else{
        res.json({msg:'Please enter all the details'});
    }
    
})

studentRoutes.post('/login',(req,res)=>{
    //studentCrud.deleteAddress(res,{});
    studentCrud.login(res,req.body);
})



module.exports=studentRoutes;