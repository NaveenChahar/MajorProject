const mongoose=require("../connection");
//const Schema= mongoose.Schema;

 const students= new mongoose.Schema({
     name:String,
     id:String,
     password:String,
     email:String,
     rollno:String,
     type:String,
     publishedArticles:[{
         id:String
     }],
     verified:{type:Boolean,default:false},
 },{timestamps:true})

module.exports={
    students:mongoose.model('students',students)
}
