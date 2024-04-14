import { execute } from 'helper';
import { CartModel, createCart } from '../db/cart';
import { CartProductModel } from '../db/cart_product';
import { getProductById } from '../db/product';
import { getUserByAccessToken } from '../db/user';
import express from 'express';

export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    execute(
        req,
        res,
        (userI) => {
            const {productId, quantity} = req.body;

            if(!productId || !quantity) {
                return res.status(400);
            }
        
            const product = await getProductById(productId);
        
            if(!product) {
                return res.status(401);
            }
        
            const cart = await createCart({
                userId: currentUser._id,
                products: [],
            }
            );
            
            return res.status(200).json(cart).end();
        }
    );
}