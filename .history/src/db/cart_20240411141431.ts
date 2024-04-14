import mongoose from "mongoose";
import productModel from "db/product"

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});