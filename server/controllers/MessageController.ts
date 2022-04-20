import { Request, Response } from 'express';
import { Message } from '../models/message';

export const getPersonalConversation = async (req: any, res: Response ) => {

    const myId = req.uid;
    const messageFrom = req.params.from;

    const last10 = await Message.find({
        $or: [
            { from: myId, to: messageFrom },
            { from: messageFrom, to: myId },
        ]
    })
        .sort({ createdAt: -1 })
        .limit(10);

    res.json({
        ok: true,
        messages: last10
    });

}

export const getChannelConversation = async (req: Request, res: Response ) => {

    const channel = req.params.from;

    const last10 = await Message.find({  to: channel   })
        .sort({ createdAt: -1 })
        .limit(10);

    res.json({
        ok: true,
        messages: last10
    });

}