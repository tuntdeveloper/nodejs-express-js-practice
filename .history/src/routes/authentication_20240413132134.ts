import { authRegister ,login} from '../controller/authentication';
import express from 'express';

export default(router: express.Router) => {
    router.post('/auth/register', authRegister);
    router.post('/auth/login', login);
}