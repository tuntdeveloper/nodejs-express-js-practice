import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Int8Array, required: true},
    shopId: {type: String, required: true},
})