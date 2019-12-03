const student=require('../schemas/studentSchema')
const logger=require('../../Utils/winstonLogger');

const studentCrud={
    signUp(res,obj){
        student.students.create(obj,(err)=>{
            if(err){
                res.json({msg:'Some error Occured'});
            }
            else{
                res.json({msg:'User Created'})
            }
        })
    },

    login(res,obj){
        student.students.findOne({email:obj.email,password:obj.password},(err,doc)=>{
            if(err){
                res.json({msg:'Error'});
            }
            else if(doc==null){
                res.json({msg:'No such Record Found'});
            }
            else{
                res.json({msg:'Logged in'})
            }
        })
    }
    

}

module.exports=studentCrud;