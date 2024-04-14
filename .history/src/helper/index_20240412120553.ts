import crypto from 'crypto';
import { getUserByAccessToken, UserModel } from '../db/user';
import express from 'express';

const SECRET_KEY = 'JOHNBIGWOLF';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(SECRET_KEY).digest('hex');
}
export const execute = async (
    req: express.Request,
    res: express.Response,
    callback: (user:  UserModel) => void) => {

    try {
        console.log('Cart: ' + req.header('Authentication'))

    if(!req.header('Authentication')) {
        return res.status(401);
    }

    const currentUser = await getUserByAccessToken(req.header('Authentication'));
    
    if(!currentUser) {
        return res.status(401);
    }

    callback(currentUser.to);

    } catch(e) {
        return res.status(400);
    }
}
