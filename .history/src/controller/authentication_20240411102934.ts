import express from 'express';
import { getUserByEmail } from 'db/user';


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, userName} = req.body;

        if(!email || !password || !userName) {
            return res.sendStatus(401);
        }

        const existUser = await getUserByEmail(email)


    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 
