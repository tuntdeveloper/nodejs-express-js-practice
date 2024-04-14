import mongoose from "mongoose";
import { ProductModel } from "./product";


const CartSchema = new mongoose.Schema({
    userId: {type: String, selected: false, required: true},
    products: {type: Array<typeof ProductModel> , required: true},
    amount: {type: Number, required: true},
});

export const CartModel = mongoose.model('Cart', CartSchema);


export const createCart = (cart: typeof CartModel) => CartModel(cart.).save().then((cart) => cart.toObject())
export const getCartByUserId = (userId: string) => CartModel.findOne({'userId': userId});
