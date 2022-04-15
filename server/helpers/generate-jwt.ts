import jwt from 'jsonwebtoken';
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

interface UserPayload {
    uid: string;
}

export const checkJWT = async (token: string) => {
    try {
        const payload = jwt.verify(token,
            process.env.JWT_KEY as string
        ) as UserPayload;

        return [true, payload.uid];

    } catch (error: any) {
        console.log("err", error.message, token);
        return [false, null];
    };
};