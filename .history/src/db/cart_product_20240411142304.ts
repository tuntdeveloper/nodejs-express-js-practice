import mongoose from "mongoose";
import { ProductModel } from "./product";

const CartProductSchema = new mongoose.Schema({
   product: {type: typeof ProductModel, required: true},
   quantity: 
});

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema);

