const mongoose=require("mongoose");
const db=require("../config/dbconfig");

mongoose.connect(db.url,{ useFindAndModify: false ,useNewUrlParser: true},()=>{
    console.log('connected to db');
});

module.exports=mongoose;