import crypto from 'crypto';


const SECRET_KEY = 'JOHNBIGWOLF';

export const random = () => crypto.randomBytes(128).toString('base64');
export const aut