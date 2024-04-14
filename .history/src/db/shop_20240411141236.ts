import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},    
});

export const ShopModel = mongoose.model('Shop', ShopSchema);

export const getShops = () => ShopModel.find();
export const getShopById  = (id: string) => ShopModel.findById(id);
export const createShop = (values: Record<string, any>) => new ShopModel(values).save().then((shop) => shop.)