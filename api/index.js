import Express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => { console.log("Connected to MongoDB"); })
    .catch(() => { console.log("Could not connect to MongoDB");})

const app = Express();  

app.listen(3000, () => {
    console.log("Server running on port 3000");
});