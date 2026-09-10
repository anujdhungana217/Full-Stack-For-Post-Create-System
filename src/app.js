import express from "express";
import multer from "multer";
import UploadFile from "./services/storage.service.js";



const app = express();
const upload=multer({storage:multer.memoryStorage()})

app.post("/create-post",upload.single("photos"),async(req,res)=>{
    const data=req.body
    const result= await UploadFile(req.file.buffer)
    // console.log(data);
    // console.log(req.file);
    
    console.log(result);
    

})

export default app;