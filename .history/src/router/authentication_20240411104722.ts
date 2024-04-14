import { register } from './contro';
import express from 'express';

export default(router: express.Router) => {
    router.post('/auth/register', register);
}