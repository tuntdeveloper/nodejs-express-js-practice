import express from 'express';
import { getUserByEmail, createUser } from '../db/user';
import { authentication, random } from '../helper';
improt 

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, userName} = req.body;

        console.log('AUTH: ' + email, password, userName);


        if(!email || !password || !userName) {
            return res.sendStatus(401);
        }

        const existUser = await getUserByEmail(email);

        console.log('AUTH: ' + existUser);

        if(existUser) {
            return res.sendStatus(401);
        }

        const salt = random();
        const user = await createUser(
           {
            userName: userName,
            email: email,
            authentication: {
                salt: salt,
                password: password,
                accessToken: salt,
            },
           }
        );

        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authentication': `Bearer ${salt}`
          }
          
          const requestOptions = {                                                                                                                                                                                 
            headers: new Headers(headerDict), 
          };
          
           


        res.setHeader('Authentication', `Bearer ${salt}`);

        return res.sendStatus(200).json(user).end();
    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 
