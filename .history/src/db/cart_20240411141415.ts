import mongoose from "mongoose";
import 

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});