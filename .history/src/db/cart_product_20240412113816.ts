import mongoose from "mongoose";
import { ProductModel } from "./product";
import { Decimal128 } from "mongodb";

const CartProductSchema = new mongoose.Schema({
   product: {type: typeof ProductModel, required: true},
   quantity: {type: Number, required: true},
   amount: {type: Number, required: true},
});

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema);

