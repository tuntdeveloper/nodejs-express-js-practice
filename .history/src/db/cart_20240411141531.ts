import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductSchema>  }   
});