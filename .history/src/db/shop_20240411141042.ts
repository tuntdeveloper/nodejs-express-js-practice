import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},    
});

export const ShopModel = 
