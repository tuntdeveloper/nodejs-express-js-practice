import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Int8Array, required: true},
    shopId: {type: String, required: true},
})


export const ProductModel = mongoose.model('Product', ProductSchema);
export const getProducts = () => ProductModel.find();
export const getProductById = (id: String) => ProductModel.findById(id);
export const g

