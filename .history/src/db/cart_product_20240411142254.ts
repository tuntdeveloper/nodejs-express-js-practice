import mongoose from "mongoose";

const CartProductSchema = new mongoose.Schema({
   product: {type: typeof P}
});

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema);

