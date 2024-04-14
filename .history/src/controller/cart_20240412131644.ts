import { execute } from '../helper';
import { CartModel, createCart, getCartByUserId } from '../db/cart';
import { getProductById } from '../db/product';
import express from 'express';

export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    execute(
        req,res,
        async (userId) => {
            const {productId, quantity} = req.body;

            if(!productId || !quantity) {
                return res.status(400);
            }
        
            const product = await getProductById(productId);
        
            if(!product) {
                return res.status(401);
            }
        
            let product =



            let cart = new CartModel({
                userId: userId,
                products: [],
                amount: 
            })


            // const cart = await createCart(
                
                
            //     {
            //     userId: userId,
            //     products: [
            
            //         {
            //             id: product._id,
            //             name: product.name,
            //             description: product.description,
            //             price: product.price,
            //             quantity: Number(quantity),
            //             amount: product.price *  Number(quantity),
            //         }
            //     ],
            //     amount: 0,
            // });
            
            return res.status(200).json(cart).end();
        }
    );
}

export const getCart = async (req: express.Request, res: express.Response) =>  {
    execute(
        req,
        res,
        async (userId) => {
            const cart = await getCartByUserId(userId.toString());

            return res.status(200).json(cart).end();

        }
    )
}