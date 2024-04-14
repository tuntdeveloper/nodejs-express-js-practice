import express from 'express';


export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    if(!req.body.productId || !red.body.quantity) {
        return res.status(400).js
    }
}