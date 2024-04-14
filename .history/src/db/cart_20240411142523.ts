import mongoose from "mongoose";
import { CartProductModel } from "./cart_product";

const CartSchema = new mongoose.Schema({
    userId: {type: String, selected: false, required: true},
    products: {type: Array<typeof CartProductModel> , required: true},
    amount: {type: Int16Array, required: true},
});

export const CartModel = mongoose.model('Cart', CartSchema);

export const createCart = (values: Record<string, any>) => new CartModel(values).save().then((cart) => cart.toObject())
export const getCartByUserId = (userId: string) => CartModel.findOne({'userId': userId});
export const addProductToCart = (productId: string, quantity: Int8Array) => {}