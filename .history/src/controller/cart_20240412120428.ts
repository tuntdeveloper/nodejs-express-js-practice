import { execute } from 'helper';
import { CartModel, createCart } from '../db/cart';
import { CartProductModel } from '../db/cart_product';
import { getProductById } from '../db/product';
import { getUserByAccessToken } from '../db/user';
import express from 'express';

export const addProductToCart =  async (req: express.Request, res: express.Response) =>  {
    execute(
        req,
        res,
        () => {

        }
    );

    
}