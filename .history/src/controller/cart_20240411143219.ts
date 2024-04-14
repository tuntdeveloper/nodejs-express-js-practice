import express from 'express';
improt { createC}


export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    if(!req.headers['Authentication']) return res.status(404);


    if(!req.body.productId || !req.body.quantity) {
        return res.status(400);
    }


}