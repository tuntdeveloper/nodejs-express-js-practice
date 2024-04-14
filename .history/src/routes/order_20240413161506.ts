import { orderGetAll, orderPlaceDraft } from '../controller/order';
import express from 'express';

export default(router: express.Router) => {
    router.post('/order/place-draft', orderPlaceDraft);
    router.post('/order', orderGetAll);
}