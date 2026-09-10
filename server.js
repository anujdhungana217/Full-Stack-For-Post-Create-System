import app from "./src/app.js"
import createDb from "./src/db/db.js"

createDb()

app.listen(3000,()=>{
    console.log("Server is running in port no 3000");
    
})