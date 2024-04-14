import mongoose from "mongoose";

const CartS = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},    
});