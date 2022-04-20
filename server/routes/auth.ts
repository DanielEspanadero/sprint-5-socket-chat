/*
    path: api/login
*/
import { Router } from 'express';
import { check } from 'express-validator';

// Controllers
import { createUser, login, renewToken, GoogleLogin } from '../controllers/AuthController';
import { checkFields } from '../middlewares/checkFields';
import { validateJWT } from '../middlewares/auth';



const router = Router();

router.post('/google', GoogleLogin );

// Create new users
router.post( '/new', [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    checkFields
], createUser );


// Login
router.post('/',[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    checkFields
], login );

// Revalidar Token
router.get('/renew', validateJWT, renewToken );


export {router as authRouter};