import mongoose from "mongoose";
import { Product } from '../../.history/src/db/product_20240411140550';

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Int8Array, required: true},
    shopId: {type: String, required: true},
})


export const ProductModel = mongoose.model('Product', ProductSchema);
export const getProducts = () => ProductModel.find();
export const getProductById = (id: String) => ProductMode

