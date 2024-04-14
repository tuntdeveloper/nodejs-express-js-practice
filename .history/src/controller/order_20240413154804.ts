import { getCartByUserId } from 'db/cart';
import { ProductModel } from 'db/product';
import express from 'express';
import { execute } from 'helper';
import { cartDeleteProductsByIds } from './cart';


export const orderPlace = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const existCart = await getCartByUserId(userId.toString());

            if (!existCart || existCart.products.length === 0) {
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

            if (!productIds || productIds.isEmpty) {
                return res.status(401).end();
            }

            const existCart = await getCartByUserId(userId.toString());

            if (!existCart || existCart.products.length === 0) {
                return res.status(401).end();
            }
        
            let products : typeof ProductModel[] = [];

            for(var item of existCart.products ) {
                for(var id of productIds) {
                    if(item.id === id) {
                        products.push(item);
                    }
                }
            }

            var currentShopId = '';

            for(var productItem : typeof ProductModel of products) {

            }




            await cartDeleteProductsByIds(req, res);
        }
    )
}