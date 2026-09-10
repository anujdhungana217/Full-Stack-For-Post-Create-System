import express from "express";
import multer from "multer";
import UploadFile from "./services/storage.service.js";
import PostModel from "./modles/data.model.js";


const app = express();
const upload=multer({storage:multer.memoryStorage()})

app.post("/create-post",upload.single("photos"),async(req,res)=>{
    const result= await UploadFile(req.file.buffer)
    // console.log(req.body);
    // console.log(req.file);
    // console.log(result);
const  post=await PostModel.create({
    photo:result.url,
    caption:req.body.caption
})
    return res.status(201).json({
        message:"Post Created Successfully",
        post
    })

})

app.get("/create-post",async(req,res)=>{
    const post=await PostModel.find()
    res.status(200).json({
        message:"Fetch Post Successfully",
        post
    })
})

export default app;