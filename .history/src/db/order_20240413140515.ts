import mongoose from "mongoose";
import { ProductModel } from "./product";

const OrderSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    shopId: {type: Number, required: true},
    amount: {type: Number, required: true, select: false},
    products: {type: Array<typeof ProductModel> , }
})