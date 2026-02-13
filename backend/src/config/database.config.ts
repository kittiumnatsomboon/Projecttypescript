import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDBURL = process.env.MONGODB_URI; 

// Connect to MongoDB
mongoose.connect(mongoDBURL as string)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    // Start the Express server AFTER a successful database connection
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the application if the connection fails
  });

export default mongoose