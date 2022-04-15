import { Router } from "express";
import { check } from "express-validator";

import { createUser, login, renewToken } from "../controllers/auth";

const router = Router();

