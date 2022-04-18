import { Response, Request } from 'express';
import { User } from '../models/user';
import { genSaltSync, hashSync, compareSync, hash } from 'bcrypt';
import { generateAccessToken } from '../helpers/generate-jwt';
import { getProfileInfo } from '../helpers/google';

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

export const renewToken = async (req: any, res: Response) => {
    const uid: any = req.uid;

    // Get a new token
    const token = await generateAccessToken(uid);

    // Get user by uid
    const user = await User.findById(uid);

    res.status(200).json({
        ok: true,
        user,
        token
    });
};

export const googleLogin = async (req: Request, res: Response) => {
    try {
        const code = req.body.code;
        const profile: any = await getProfileInfo(code);

        const { email_verified, email, sub } = profile;

        if (!email_verified) return res.status(400).json({
            ok: false,
            msg: 'User signup failed with google'
        });

        const userDB: any = await User.findOne({ email });

        // If the found user has the same google id, we create token

        if (userDB && userDB.auth.id === sub) {

            const token = await generateAccessToken(userDB._id);

            return res.json({
                ok: true,
                user: userDB,
                token
            });
        };

        // If the user does not exist in the database, we create it

        const user: any = new User({
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            avatar: profile.picture,
            auth: {
                type: 'Google',
                id: profile.sub
            }
        });

        await user.save();

        // Generar el JWT
        const token = await generateAccessToken(user.id);

        res.status(200).json({
            ok: true,
            user,
            token
        });

    } catch (error: any) {
        res.status(401).json({
            ok: false,
            msg: error
        });
    };
};