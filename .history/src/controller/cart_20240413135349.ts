import { execute } from '../helper';
import { CartModel, getCartByUserId } from '../db/cart';
import { getProductById, ProductModel } from '../db/product';
import express from 'express';

export const cartAddProduct = async (req: express.Request, res: express.Response) => {
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

            let product = existProduct.set(
                {
                    quantity: Number(quantity),
                    amount: existProduct.price * Number(quantity),
                }
            );

            //Case: cart is empty or not exist
            if (!existCart && Number(quantity) !== 0) {
                const result = await CartModel.create({
                    id: (await CartModel.find()).length + 1,
                    userId: userId,
                    products: [product],
                    amount: 0,
                });

                return res.status(200).json(result).end();
            }


            if(existCart.products.length == 0) {
                const result = await existCart.set({
                    products: [product]
                }).save();
    
                console.log('CART: ' + result);

                return res.status(200).json(result).end();
            }

            if(existCart.products.find(item => item.id === existProduct.id)) {
                let products : typeof ProductModel[] = existCart.products.map<typeof ProductModel>(value => {
                    if (value.id === existProduct.id) {
                        return product;
                    }
    
                    return value;
                });
    
                const result = await existCart.set({
                    products: products
                }).save();
    
                console.log('CART: Already contain item' + result);
    
                return res.status(200).json(result).end();
            }

            const result = await existCart.set({
                products: [...existCart.products, product]
            }).save();

            console.log('CART: New item is cart' + result);

            return res.status(200).json(result).end();
        }
    );
}

export const cartDeleteProductsByShopId = async (req: express.Request, res: express.Response) => {
    
}

export const cartDeleteAllProducts = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const existCart = await getCartByUserId(userId.toString());

            if(!existCar)

        }
    )
}

export const cartGetInfo = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const cart = await getCartByUserId(userId.toString());

            return res.status(200).json(cart).end();
        }
    )
}