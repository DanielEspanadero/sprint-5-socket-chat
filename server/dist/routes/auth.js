"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
/*
    path: api/login
*/
var express_1 = require("express");
var express_validator_1 = require("express-validator");
// Controllers
var AuthController_1 = require("../controllers/AuthController");
var checkFields_1 = require("../middlewares/checkFields");
var auth_1 = require("../middlewares/auth");
var router = (0, express_1.Router)();
exports.authRouter = router;
router.post('/google', AuthController_1.GoogleLogin);
// Create new users
router.post('/new', [
    (0, express_validator_1.check)('firstName', 'First name is required').not().isEmpty(),
    (0, express_validator_1.check)('lastName', 'Last name is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
    checkFields_1.checkFields
], AuthController_1.createUser);
// Login
router.post('/', [
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    checkFields_1.checkFields
], AuthController_1.login);
// Revalidar Token
router.get('/renew', auth_1.validateJWT, AuthController_1.renewToken);
//# sourceMappingURL=auth.js.map