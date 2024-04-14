import express from 'express';


export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    if(!req.headers['Authentication'])return  res.status(4);


    if(!req.body.productId || !req.body.quantity) {
        return res.status(400);
    }




}