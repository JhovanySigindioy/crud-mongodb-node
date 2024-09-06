import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const appDB: Promise<mongoose.Mongoose> = mongoose.connect(process.env.DB_URI!);






























