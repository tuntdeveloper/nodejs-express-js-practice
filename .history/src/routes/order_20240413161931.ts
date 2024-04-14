import { orderGetAll, orderPlaceDraft } from '../controller/order';
import express from 'express';

export default(router: express.Router) => {
    router.post('/order', orderGetAll);
    router.post('/order', or);
    router.post('/order/place-draft', orderPlaceDraft);
}