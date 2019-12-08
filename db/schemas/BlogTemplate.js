const mongoose= require('../connection');

const Schema=mongoose.Schema;

const BlogTemplate= new Schema({
    blogId:String,
    content:[{
        priority:Number,
        type:String,
        subHeading:String,
        data:String
    }],
    comments:[{
        uid:String,
        comment:String
    }]
})

module.exports=mongoose.model('BlogTemplates',BlogTemplate)