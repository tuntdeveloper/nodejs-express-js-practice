import { register } from 'controller/a';
import express from 'express';

export default(router: express.Router) => {
    router.post('/auth/register', register);
}