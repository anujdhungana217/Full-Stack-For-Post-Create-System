import mongoose from "mongoose";

const PostSchema=mongoose.Schema({
    photo:String,
    caption:String
})

const PostModel=mongoose.model("post",PostSchema)

export default PostModel