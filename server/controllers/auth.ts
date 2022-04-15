import {Response, Request} from 'express';
import { User } from '../models/user';
import { genSaltSync, hashSync, compareSync, hash } from "bcrypt";
import mongoose from 'mongoose';

export const createUser = async (req: Request, res: Response) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        // Check if the user exists with the email.
        const userDB = await User.findOne({email});

        if(userDB){
            return res.status(400).json({
                msg: 'Email already used! Try to login.'
            });
        };

        const user: any = new User(req.body);

        // Encrypt password
        const salt = genSaltSync();
        user.password = hashSync(password, salt);

        // Save user in DB
        await user.save();

    } catch (error: any) {
        res.status(500).json({
            ok: false,
            msg: error
        });
    };
};