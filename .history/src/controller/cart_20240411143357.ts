import { createCart } from 'db/cart';
import { getUserByAccessToken } from 'db/user';
import express from 'express';


export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    if(!req.headers['Authentication']) return res.status(404);

    if(!req.body.productId || !req.body.quantity) {
        return res.status(400);
    }

    const currentUser = await getUserByAccessToken(req.headers['Authentication']);

    const cart = await createCart();

}