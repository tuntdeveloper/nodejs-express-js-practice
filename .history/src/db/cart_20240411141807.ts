import mongoose from "mongoose";
import { ProductModel } from "./product";

const CartSchema = new mongoose.Schema({
    products: {type: Array<typeof ProductModel> , required: true},
    amount: {type: Int16Array, required: true},
});