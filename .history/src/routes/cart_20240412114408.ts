import express from 'express';

export default(router: express.Router) => {
    router.post('/cart/register', register);
    router.post('/auth/login', login);
}