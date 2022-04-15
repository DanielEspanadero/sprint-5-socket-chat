import { Router } from "express";
import { check } from "express-validator";

import { createUser, login, renewToken, googleLogin } from "../controllers/auth";
import { checkFields } from "../middlewares/validate-fields";
import { validateToken } from "../middlewares/validate-jwt";

const router = Router();

router.post('/google', googleLogin);

// Create new users

router.post('/new', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    checkFields
], createUser);

