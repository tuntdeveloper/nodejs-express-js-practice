import express from 'express';

export default(router: express.Router) => {
    router.post('/order/place-draft/', cartGetInfo);
   
}