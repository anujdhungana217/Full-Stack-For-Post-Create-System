import mongoose from "mongoose";

async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://LearningAdmin:kZAZ7lYjPCHKOUiI@cluster0.fv8a1gf.mongodb.net/Post-Create",
  );
  console.log("DataBase COnnected");
}

export default connectDb;
