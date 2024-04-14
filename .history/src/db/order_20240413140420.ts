import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    shopId: {type: Number, required: true},
    quantity: {type: Number, required: true, select: false},
    amount: {type: Number, required: true, select: false},
})