import mongoose from "mongoose";
import { ProductModel } from "./product";
import { Decimal128 } from "mongodb";

const CartProductSchema = new mongoose.Schema({
   product: {type: typeof ProductModel, required: true},
   quantity: {type: Decimal128, required: true},
   amount: {type: Decimal128, required: true},
});

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema);

