import { Router } from "express";
import { check } from "express-validator";

import { createUser, login, renewToken, googleLogin } from "../controllers/auth";
import { checkFields } from "../middlewares/validate-fields";
import { validateToken } from "../middlewares/validate-jwt";

const router = Router();

router.post('/google', googleLogin);

// Create new users

