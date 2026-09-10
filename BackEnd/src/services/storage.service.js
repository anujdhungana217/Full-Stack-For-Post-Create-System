import ImageKit from "@imagekit/nodejs";

const client=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function UploadFile(buffer){
    const result =await client.files.upload({
        file:buffer.toString("base64"),
        fileName:"img.jpg"
    })
    return result
}
export default UploadFile