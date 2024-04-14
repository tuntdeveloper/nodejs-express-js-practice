import express from 'express';
import 


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, userName} = req.body;

        if(!email || !password || !userName) {
            return res.sendStatus(401);
        }

        const existUser = await 


    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 
