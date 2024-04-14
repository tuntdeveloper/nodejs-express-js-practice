import mongoose from "mongoose";
import { ProductModel } from "./product";

const OrderSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    userId: {type: String, required: true},
    shopId: {type: Number, required: true},
    amount: {type: Number, required: true},
    products: {type: Array<typeof ProductModel> , required: true}
});

export const OrderModel = mongoose.model('Order', OrderSchema);
