import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},    
});

export const ShopModel = mongoose.model('Shop', ShopSchema);

export const getShops = () => ShopM
export const getShopById  = (id: string) => ShopModel.findById(id);
