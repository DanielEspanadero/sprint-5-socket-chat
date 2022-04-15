"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleLogin = exports.renewToken = exports.login = exports.createUser = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = require("bcrypt");
const generate_jwt_1 = require("../helpers/generate-jwt");
const google_1 = require("../helpers/google");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        // Check if the user exists with the email.
        const userDB = yield user_1.User.findOne({ email });
        if (userDB) {
            return res.status(400).json({
                msg: 'Email already used! Try to login.'
            });
        }
        ;
        const user = new user_1.User(req.body);
        // Encrypt password
        const salt = (0, bcrypt_1.genSaltSync)();
        user.password = (0, bcrypt_1.hashSync)(password, salt);
        // Save user in DB
        yield user.save();
        // Get token
        const token = yield (0, generate_jwt_1.generateAccessToken)(user.id);
        res.status(200).json({
            ok: true,
            user,
            token
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        });
    }
    ;
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Check if the user exists with the email
        const userDB = yield user_1.User.findOne({ email });
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                msg: 'User does not exist'
            });
        }
        // Validate password
        const validPassword = (0, bcrypt_1.compareSync)(password, userDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Invalid password'
            });
        }
        ;
        // Get token
        const token = yield (0, generate_jwt_1.generateAccessToken)(userDB.id);
        res.status(200).json({
            ok: true,
            user: userDB,
            token
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal error'
        });
    }
    ;
});
exports.login = login;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = req.uid;
    // Get a new token
    const token = yield (0, generate_jwt_1.generateAccessToken)(uid);
    // Get user by uid
    const user = yield user_1.User.findById(uid);
    res.status(200).json({
        ok: true,
        user,
        token
    });
});
exports.renewToken = renewToken;
const googleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const code = req.body.code;
        const profile = yield (0, google_1.getProfileInfo)(code);
        const { email_verified, email, sub } = profile;
        if (!email_verified)
            return res.status(400).json({
                ok: false,
                msg: 'User signup failed with google'
            });
        const userDB = yield user_1.User.findOne({ email });
        // If the found user has the same google id, we create token
        if (userDB && userDB.auth.id === sub) {
            const token = yield (0, generate_jwt_1.generateAccessToken)(userDB._id);
            return res.json({
                ok: true,
                user: userDB,
                token
            });
        }
        ;
        // If the user does not exist in the database, we create it
        const user = new user_1.User({
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            avatar: profile.picture,
            auth: {
                type: 'Google',
                id: profile.sub
            }
        });
        yield user.save();
        // Generar el JWT
        const token = yield (0, generate_jwt_1.generateAccessToken)(user.id);
        res.status(200).json({
            ok: true,
            user,
            token
        });
    }
    catch (error) {
        res.status(401).json({
            ok: false,
            msg: error
        });
    }
    ;
});
exports.googleLogin = googleLogin;
//# sourceMappingURL=auth.js.map