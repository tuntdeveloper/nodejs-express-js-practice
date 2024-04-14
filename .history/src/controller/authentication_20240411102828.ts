import express from 'express';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, userName} = req.body;

        if(!email || !password || !userNa)


    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 
