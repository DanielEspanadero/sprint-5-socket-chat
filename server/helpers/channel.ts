import { Channel } from "../models/channel";
import { User } from "../models/user";

export const createChannel = async (payload: any) => {
    try {
        const { name } = payload;
        const isChannelExist = await Channel.findOne({ name });

        if (isChannelExist) {
            console.log("Name already in use");
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