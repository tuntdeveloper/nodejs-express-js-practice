import express from 'express';
import { getUserByEmail, createUser } from '../db/user';
import { authentication, random } from '../helper';
import http from 'http';

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
            return res.status(404).json('User already existed');
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

        return res.status(200).json(user).end();
    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
} 

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { password, email} = req.body;

        if(!password || !email) {
            return res.sendStatus(401);
        }

        const existUser = await getUserByEmail(email);

        console.log('AUTH: ' + existUser);

        if(!existUser) {
            return res.status(404).json('Email is not correct');
        }


        if(existUser.authentication.password == password) {
            return res.status(200).json(user).end();
        }

    
    } catch(error) {
        console.log(error);
        return res.sendStatus(400);
    }
}