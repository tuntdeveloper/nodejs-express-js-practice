import express from 'express';
import { getUserByEmail, createUser } from 'db/user';
import { authentication, random } from 'helper';


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, userName} = req.body;

        if(!email || !password || !userName) {
            return res.sendStatus(401);
        }

        const existUser = await getUserByEmail(email);

        if(existUser) {
            return res.sendStatus(401);
        }

        const salt = random();
        const user = await createUser(
           {
            userName,
            email,
            authentication: {
                salt,
                authentication(sale, p)

            },

           }

        );
        

    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 
