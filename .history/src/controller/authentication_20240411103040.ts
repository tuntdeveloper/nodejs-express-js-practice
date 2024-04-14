import express from 'express';
import { getUserByEmail, createUser } from 'db/user';


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, userName} = req.body;

        if(!email || !password || !userName) {
            return res.sendStatus(401);
        }

        const existUser = await getUserByEmail(email);

        if(!existUser) {
            return res.sendStatus(401);
        }

        await createUser({values: req});





    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 
