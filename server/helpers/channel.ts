import { Request, Response } from 'express';
import { Channel } from '../models/channel';
import { User } from '../models/user';

export const createChannel = async (payload: any) => {
    try {
        const { name } = payload;
        const isChannelExist = await Channel.findOne({ name });

        if (isChannelExist) {
            console.log('Name already in use');
            return;
        };

        const channel: any = new Channel({ name });
        channel.type = 'channel';

        await channel.save();

        return channel;
    } catch (error) {
        console.log(error);
        return false;
    };
};

export async function getUserName(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ 
                ok: false, 
                msg: 'User not found' 
            });
        }

        return res.json({
            ok: true,
            user
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    };
};