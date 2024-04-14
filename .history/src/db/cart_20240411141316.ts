import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},    
});