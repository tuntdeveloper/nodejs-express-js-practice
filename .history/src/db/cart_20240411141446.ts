import mongoose from "mongoose";
import  from "db/product";

const CartSchema = new mongoose.Schema({
    products: {type: Array<productModel> }   
});