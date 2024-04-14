import mongoose from "mongoose";
import { ProductModel } from '../../.history/src/db/product_20240411140927';

const CartSchema = new mongoose.Schema({
    products: {type: Array<ProductModel> }   
});