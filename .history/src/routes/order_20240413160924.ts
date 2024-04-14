import express from 'express';

export default(router: express.Router) => {
    router.post('/cart', cartGetInfo);
   
}