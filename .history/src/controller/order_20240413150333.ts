import { getCartByUserId } from 'db/cart';
import express from 'express';
import { execute } from 'helper';

export const orderPlaceDraft = async (req: express.Request, res: express.Response) => {
    execute(
        req,
        res,
        async (userId) => {
            const existCart = await getCartByUserId(userId.toString());

            if(!existCart.)

        }
    )
}