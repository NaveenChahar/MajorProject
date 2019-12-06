const mongoose= require('../connection');

const Schema=mongoose.Schema;

const BlogTemplate= new Schema({
    blogId:String,
    content:{
        paragraphs:[{
            priority:Number,
            paragraph:String,
            paraHeading:String
        }],
        images:[{
            priority:Number,
            images:String
        }],
        videoLinks:[{
            priority:Number,
            link:String
        }]
    },
    comments:[{
        uid:String,
        comment:String
    }]
})

module.exports=mongoose.model('BlogTemplates',BlogTemplate)