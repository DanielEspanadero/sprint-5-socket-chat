import { Response, Request } from 'express';
import { User } from '../models/user';
import { genSaltSync, hashSync, compareSync, hash } from "bcrypt";
import mongoose from 'mongoose';
import { generateAccessToken } from '../helpers/generate-jwt';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if the user exists with the email.
        const userDB = await User.findOne({ email });

        if (userDB) {
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

        // Get token
        const token = await generateAccessToken(user.id);

        res.status(200).json({
            ok: true,
            user,
            token
        });

    } catch (error: any) {
        res.status(500).json({
            ok: false,
            msg: error
        });
    };
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists with the email
        const userDB: any = await User.findOne({ email });

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                msg: 'User does not exist'
            })
        }

        // Validate password
        const validPassword = compareSync(password, userDB.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Invalid password'
            });
        };

        // Get token
        const token = await generateAccessToken(userDB.id);

        res.status(200).json({
            ok: true,
            user: userDB,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal error'
        });
    };
};