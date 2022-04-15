"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validate_fields_1 = require("../middlewares/validate-fields");
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
//# sourceMappingURL=auth.js.map