const mongoose= require('../connection');

const Schema=mongoose.Schema;

const BlogSchema=new Schema({
    catId:String,
    blogId:String,
    topic:String,
    userId:String,
    upVotes:Number,
    downVotes:Number
     
     

},{timestamps:true})

BlogSchema.methods.toJSON = function() {
    return {
      _id: this._id,
      catId:this.catId,
      blogId:this.blogId,
      topic:this.topic,
      userId:this.userId,
      rating:this.rating,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };

module.exports=mongoose.model('Blogs',BlogSchema);