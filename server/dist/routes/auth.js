"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validate_fields_1 = require("../middlewares/validate-fields");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.post('/google', auth_1.googleLogin);
// Create new users
router.post('/new', [
    (0, express_validator_1.check)('firstName', 'First name is required').not().isEmpty(),
    (0, express_validator_1.check)('lastName', 'Last name is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
    validate_fields_1.checkFields
], auth_1.createUser);
// Login
router.post('/', [
    (0, express_validator_1.check)('email', 'Email is required').isEmail(),
    (0, express_validator_1.check)('password', 'Password is required').not().isEmpty(),
    validate_fields_1.checkFields
], auth_1.login);
// Revalidar Token
router.get('/renew', validate_jwt_1.validateToken, auth_1.renewToken);
exports.default = router;
//# sourceMappingURL=auth.js.map