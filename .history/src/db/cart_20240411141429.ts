import mongoose from "mongoose";
import productModel from "db"

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});