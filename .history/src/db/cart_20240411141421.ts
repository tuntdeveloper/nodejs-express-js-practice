import mongoose from "mongoose";
import productModel from "produ"

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});