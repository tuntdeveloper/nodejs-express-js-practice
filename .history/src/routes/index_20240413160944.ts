import express from 'express';
import authentication from './authentication';
import cart from './cart';
import order from './order';

const router = express.Router();

export default(): express.Router => {
    authentication(router);
    cart(router);
    order(router);
    return router;
}