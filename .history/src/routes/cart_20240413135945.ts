import { cartAddProduct, cartDeleteAllProducts, cartDeleteProductsByShopId, cartGetInfo } from '../controller/cart';
import express from 'express';

export default(router: express.Router) => {
    router.post('/cart', cartGetInfo);
    router.post('/cart/delete-products', cartDeleteAllProducts);
    router.post('/cart/delete-product-', cartDeleteProductsByShopId);
    router.post('/cart/add-product', cartAddProduct);
}