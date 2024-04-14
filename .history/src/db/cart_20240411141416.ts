import mongoose from "mongoose";
import product

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});