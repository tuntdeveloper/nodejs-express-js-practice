import mongoose from "mongoose";

const CartProductSchema = new mongoose.Schema({
    userId: {type: String, selected: false, required: true},
    products: {type: Array<typeof ProductModel> , required: true},
    amount: {type: Int16Array, required: true},
});

export const CartProductModel = mongoose.model('Cart', CartProductSchema);

