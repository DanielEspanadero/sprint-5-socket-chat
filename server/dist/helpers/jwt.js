"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = exports.getToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var getToken = function (uid) {
    return new Promise(function (resolve, reject) {
        var payload = { uid: uid };
        (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, function (err, token) {
            if (err) {
                console.log(err);
                reject('Cannot generate JWT');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.getToken = getToken;
var checkToken = function (token) {
    try {
        var payload = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        return [true, payload.uid];
    }
    catch (error) {
        console.log('err', error.message, token);
        return [false, null];
    }
};
exports.checkToken = checkToken;
//# sourceMappingURL=jwt.js.map