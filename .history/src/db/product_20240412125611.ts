import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    shopId: {type: String, required: true},
    quantity: {type: Number, required: true, select: false},
    amount: {type: Number, required: true, sel},
})


export const ProductModel = mongoose.model('Product', ProductSchema);
export const getProducts = () => ProductModel.find();
export const getProductById = (id: string) => ProductModel.findById(id);
export const getProductByShopId = (shopId: string) => ProductModel.findOne({'shopId': shopId});

export const createProduct = (values: Record<string, any>) => new ProductModel(values).save().then((product) => product.toObject());



