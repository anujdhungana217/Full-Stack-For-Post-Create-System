import ImageKit from "@imagekit/nodejs";

const client=new ImageKit({
    privateKey:"private_2PsQcPpqVyOj3xnH4k7xfhv3x7k="
})

async function UploadFile(buffer){
    const result =await client.files.upload({
        file:buffer.toString("base64"),
        fileName:"img.jpg"
    })
    return result
}
export default UploadFile