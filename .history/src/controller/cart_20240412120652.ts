import { execute } from 'helper';
import { CartModel, createCart } from '../db/cart';
import { getProductById } from '../db/product';
import express from 'express';

export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    execute(
        req,
        res,
        async (userId) => {
            const {productId, quantity} = req.body;

            if(!productId || !quantity) {
                return res.status(400);
            }
        
            const product = await getProductById(productId);
        
            if(!product) {
                return res.status(401);
            }
        
            const cart = await createCart({
                userId: userId,
                products: [],
            }
            );
            
            return res.status(200).json(cart).end();
        }
    );
}