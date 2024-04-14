import { getCartByUserId } from '../db/cart';
import { ProductModel } from '../db/product';
import express from 'express';
import { execute } from 'helper';
import { cartDeleteProductsByIds } from './cart';
import { OrderModel } from '../db/order';


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

            let products = [];

            for (var item of existCart.products) {
                for (var id of productIds) {
                    if (item.id === id) {
                        products.push(item);
                    }
                }
            }

            var currentShopId: Number;
            var orders: any[] = [];

            for (var productItem of products) {
                currentShopId = productItem.shopId;

                if (orders.length === 0) {
                    orders.push(
                        new OrderModel({
                            id: (await OrderModel.find()).length,
                            shopId: currentShopId,
                            products: [productItem],
                            amount: 0,
                        }),
                    );
                    break;
                }

                const isShopExist = orders.find(order => order.shopId === currentShopId);

                if(isShopExist) {
                    orders = orders.map((order) => {
                        if(order.shopId === currentShopId) {
                            return {...order, products: [...order.products, productItem]}
                        }

                        return order;
                    });
                } else {
                    orders.push(
                        new OrderModel({
                            id: (await OrderModel.find()).length,
                            shopId: currentShopId,
                            products: [productItem],
                            amount: 0,
                        }),
                    );
                }
            }


            for(var order of orders) {
                
            }

            // await cartDeleteProductsByIds(req, res);
        }
    )
}