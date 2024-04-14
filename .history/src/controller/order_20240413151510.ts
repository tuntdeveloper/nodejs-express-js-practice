import { getCartByUserId } from 'db/cart';
import { ProductModel } from 'db/product';
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
            const { productIds } = req.body;

            if(!productIds || productIds.isEmpty) {
                return res.status(401).end();
            }

            let reqProductsIds : Array<Number> = (productIds as Array<typeof String>).map(id => Number(id));


            

        }
    )
}