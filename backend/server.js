import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'; 

import resultRoutes from './routes/result.route.js'; // Import the result routes

import cors from 'cors';



dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/result", resultRoutes); // Use the result routes


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
