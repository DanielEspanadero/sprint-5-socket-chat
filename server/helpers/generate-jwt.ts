import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import { User } from '../models/user';

export const generateAccessToken = (uid = '') => {
    return new Promise((resolve: any, reject: any) => {
        const user = uid;

        jwt.sign(user, process.env.SECRETORPRIVATEKEY as string, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Failed to generate JWT')
            } else {
                resolve(token);
            };
        }
        );
    });
};

export const checkJWT = async (token: string = '') => {
    try {

        if (token.length < 10) {
            return null;
        };
        const { uid }: any = jwt.verify(token, process.env.SECRETORPRIVATEKEY as string);

        return [true, uid]
    } catch (error) {
        console.log(error);
        return [false, null];
    }
}