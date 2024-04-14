import { execute } from '../helper';
import { CartModel, getCartByUserId } from '../db/cart';
import { getProductById, ProductModel } from '../db/product';
import express from 'express';
import cart from 'routes/cart';

export const addProductToCart = async (req: express.Request, res: express.Response) => {
    execute(
        req, res,
        async (userId) => {
            const { productId, quantity } = req.body;

            if (!productId || !quantity) {
                return res.status(400);
            }

            const existProduct = await getProductById(productId);

            if (!existProduct) {
                return res.status(401);
            }

            const existCart = await getCartByUserId(userId.toString());


            //Case: cart is empty or not exist
            if (!existCart || existCart.products.length == 0) {
                let product = existProduct.set(
                    {
                        quantity: Number(quantity),
                        amount: existProduct.price * Number(quantity),
                    }
                );

                const result = await CartModel.create({
                    id: (await CartModel.find()).length + 1,
                    userId: userId,
                    products: [product],
                    amount: 0,
                });

                return res.status(200).json(result).end();
            }

            // Case: cart already exist

            let products : typeof ProductModel[] = existCart.products.map<typeof ProductModel>(value => {
                if (value.id === existProduct.id) {
                    let newValue = { ...value, quantity: Number(quantity), amount: existProduct.price * Number(quantity)};
                    return newValue;
                }

                return value;
            });

            const result = existCart.set({
                products: products
            }).save().then((value) => value.toObject);

            return res.status(200).json(result).end();
        }
    );
}

export const getCart = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const cart = await getCartByUserId(userId.toString());

            return res.status(200).json(cart).end();
        }
    )
}