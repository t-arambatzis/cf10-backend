import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONG_URI = process.env.MONGO_URI || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONG_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit();
  }
};
