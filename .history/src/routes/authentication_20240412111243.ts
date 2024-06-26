import { register } from '../controller/authentication';
import express from 'express';

export default(router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/lo', register);
}