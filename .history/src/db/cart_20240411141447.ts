import mongoose from "mongoose";
import {P} from "db/product";

const CartSchema = new mongoose.Schema({
    products: {type: Array<productModel> }   
});