import express from 'express';

export default(router: express.Router) => {
    router.post('/cart/add', register);
    router.post('/auth/login', login);
}