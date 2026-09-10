import mongoose from "mongoose";

async function connectDb() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DataBase COnnected");
}

export default connectDb;
