import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    shopId: {type: Number, required: true},
    amount: {type: Number, required: true, select: false},
    products: {type: typeof ProductModel}
})