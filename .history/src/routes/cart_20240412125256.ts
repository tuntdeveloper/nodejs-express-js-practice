import { addProductToCart } from '../controller/cart';
import express from 'express';

export default(router: express.Router) => {
    router.post('/cart/add-product', addProductToCart);
    router.post('/cart/add-product', addProductToCart);
}