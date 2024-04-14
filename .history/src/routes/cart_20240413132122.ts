import { cartAddProduct, cartGetInfo } from '../controller/cart';
import express from 'express';

export default(router: express.Router) => {
    router.post('/cart/add-product', cartAddProduct);
    router.post('/cart', cartGetInfo);
}