import { cartAddProduct, cartGetInfo } from '../controller/cart';
import express from 'express';

export default(router: express.Router) => {
    router.post('/cart', cartGetInfo);
    router.post('/cart',     router.post('/cart', cartGetInfo);
);
    router.post('/cart/add-product', cartAddProduct);
}