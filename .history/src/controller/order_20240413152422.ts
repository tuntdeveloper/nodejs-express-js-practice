import { getCartByUserId } from 'db/cart';
import { ProductModel } from 'db/product';
import express from 'express';
import { execute } from 'helper';
import productModel from 'db/';


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

            const existCart = await getCartByUserId(userId.toString());

            if(!existCart || existCart.products.length === 0) {
                return res.status(401).end();
            }

            let reqProductsIds : Array<Number> = productIds.map(id => Number(id));

            const productOrder = <Array<typeof ProductModel>>[];

            for(var item of existCart.products) {
                con

                for(var id of reqProductsIds) {
                    if(id === item.id) {

                    }
                }
            }
        }
    )
}