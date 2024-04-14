import express from 'express';
import authentication from './authentication';
import cart from './cart';

const router = express.Router();

export default(): express.Router => {
    authentication(router);
    cart(router);
    return router;
}