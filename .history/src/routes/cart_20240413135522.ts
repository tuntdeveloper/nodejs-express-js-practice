import { cartAddProduct, cartDeleteAllProducts, cartGetInfo } from '../controller/cart';
import express from 'express';

export default(router: express.Router) => {
    router.post('/cart', cartGetInfo);
    router.post('/cart/delete-prodc', cartDeleteAllProducts);
    router.post('/cart/add-product', cartAddProduct);
}