import mongoose from "mongoose";
import { ProductModel } from "./product";
import { Decimal128 } from "mongodb";

const CartProductSchema = new mongoose.Schema({
   product: {type: typeof ProductModel, required: true},
   quantity: {type: number, required: true},
   amount: {type: number, required: true},
});

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema);

