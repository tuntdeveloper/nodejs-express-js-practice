import mongoose from "mongoose";
import { ProductModel } from "./product";

const CartProductSchema = new mongoose.Schema({
   product: {type: typeof ProductModel}
});

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema);

