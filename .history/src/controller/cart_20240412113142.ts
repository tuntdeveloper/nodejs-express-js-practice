import { createCart } from 'db/cart';
import { getUserByAccessToken } from 'db/user';
import express from 'express';


export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    if(!req.headers['Authentication']) return res.status(401);

    const {productId, quantity} = req.body;


    if(!productId || !quantity) {
        return res.status(400);
    }
    const currentUser = await getUserByAccessToken(req.header('Authentication'));


    
}