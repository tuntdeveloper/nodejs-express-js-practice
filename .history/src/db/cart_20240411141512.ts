import mongoose from "mongoose";
import {ProductSchema} from "db/product";

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductSchema>  }   
});