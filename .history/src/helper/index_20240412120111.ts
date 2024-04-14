import crypto from 'crypto';
import

const SECRET_KEY = 'JOHNBIGWOLF';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(SECRET_KEY).digest('hex');
}
export const execute = (
    req: 
    callback: (msg: string) => void) => {
    try {} catch(e) {
        
    }
}
