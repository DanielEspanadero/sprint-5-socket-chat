"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var validateJWT = function (req, res, next) {
    try {
        var token = req.header('x-token');
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No token provided'
            });
        }
        var payload = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        req.uid = payload.uid;
        next();
    }
    catch (e) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid Token'
        });
    }
};
exports.validateJWT = validateJWT;
/* import VerifyAccessToken from '../src/shared/application/security/VerifyAccessToken';
import User from '../src/users/domain/User';
import { Request } from 'express';

interface RequestWithUser extends Request {
    user: User;
  }

export default (dependencies: { Authentication: any; }) => {

   
    // Dependencies
    const { Authentication } = dependencies;
    
    // Injecting dependencies
    const verifyAccessCommand = VerifyAccessToken(Authentication);



    // Individual authorization for user
    const authSingle = async (req:any, res:any, next:any) => {

        // Extract authorization header, token and playerId

        const cookies = req.cookies;

        if (!cookies && !cookies.Authorization) return res.status(403).json('Access denied.');

        const token = cookies.Authorization;



        // Call use case
        try {
            const userDecoded = await verifyAccessCommand(token);
            req.user = userDecoded;
            //if (!userDecoded) return res.status(403).json('This token is not valid for this ID.');
            next();
        } catch (error) {
            next(error);
        }
    }

    

    return {
        authSingle
    };
} */
//# sourceMappingURL=auth.js.map