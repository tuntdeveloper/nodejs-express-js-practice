import { getCartByUserId } from '../db/cart';
import { ProductModel } from '../db/product';
import express from 'express';
import { execute } from '../helper';
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

            var orders: any[] = [];

            for (var productItem of products) {

                console.log('ORDER: ' + productItem.id);


                if (orders.length === 0) {
                    orders.push(
                        new OrderModel({
                            id: (await OrderModel.find()).length,
                            userId: userId,
                            shopId: productItem.shopId,
                            products: [productItem],
                            amount: 0,
                        }),
                    );
                } else {
                    const isShopExist = orders.find(order => order.shopId === productItem.shopId);

                    console.log('ORDER: shopId' + productItem.shopId);

                    if (isShopExist) {
                        console.log('ORDER: ' +productItem.id + ' item already exist');
                        orders = orders.map((order) => {
                            if (order.shopId === productItem.shopId) {

                                let newValue = { ...order, products: [...order.products, productItem] };

                                return newValue;
                            }

                            return order;
                        });
                    } else {
                        console.log('ORDER: ' + 'push a new one ' + productItem);
                        orders.push(
                            new OrderModel({
                                id: (await OrderModel.find()).length,
                                userId: userId,
                                shopId: productItem.shopId,
                                products: [productItem],
                                amount: 0,
                            }),
                        );
                    }
                }
            }


            for (var order of orders) {
                await order.save();
            }

            return res.status(200).json(orders).end();
            // await cartDeleteProductsByIds(req, res);
        }
    )
}

export const orderGetAll = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const orders = await OrderModel.find({ 'userId': userId.toString() });

            if (!orders || orders.length === 0) {
                return res.status(401).end();
            }

            return res.status(200).json(orders).end();
        }
    )
}

export const orderDeleteAll = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const orders = await OrderModel.deleteMany({ 'userId': userId.toString() });

            return res.status(200).json('Delete all orders successfully').end();
        }
    )
} 