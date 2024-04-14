import mongoose from "mongoose";
import productModel 

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});