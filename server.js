import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const app = express();
const port = 5000;

// Use environment variables for security
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://myUser:<password>@cluster0.mongodb.net/ept_rebranding?retryWrites=true&w=majority';

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB Atlas connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connectDB();