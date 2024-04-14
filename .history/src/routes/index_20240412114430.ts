import express from 'express';
import authentication from './authentication';
improt

const router = express.Router();

export default(): express.Router => {
    authentication(router);
    cart(router);
    return router;
}