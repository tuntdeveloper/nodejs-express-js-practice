import { register } from '';
import express from 'express';

export default(router: express.Router) => {
    router.post('/auth/register', register);
}