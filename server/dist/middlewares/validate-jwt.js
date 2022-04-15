"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const accesToken = req.header('authorization') || req.query.accesstoken;
    if (!accesToken) {
        res.json({
            msg: 'Access denied'
        });
    }
    ;
    jsonwebtoken_1.default.verify(accesToken, process.env.SECRETPRIVATEKEY, (err, user) => {
        if (err) {
            res.json({
                msg: 'Access denied, token expired or incorrect.'
            });
        }
        else {
            next();
        }
        ;
    });
};
exports.validateToken = validateToken;
//# sourceMappingURL=validate-jwt.js.map