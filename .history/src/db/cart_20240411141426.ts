import mongoose from "mongoose";
import productModel from "."

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});