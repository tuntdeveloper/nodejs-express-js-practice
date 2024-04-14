import { getCartByUserId } from 'db/cart';
import express from 'express';
import { execute } from 'helper';


export const orderPlace = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const existCart = await getCartByUserId(userId.toString());

            if(!existCart || existCart.products.length === 0) {
                return res.status(401).end();
            }

            
        }
    )
}

export const orderPlaceDraft = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const { productIds} = req.body;

            let reqProducts

            const existCart = await getCartByUserId(userId.toString());

            if(!existCart || existCart.products.length === 0) {
                return res.status(401).end();
            }

            
        }
    )
}