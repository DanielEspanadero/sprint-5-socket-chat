import { User } from "../models/user";
import { Message } from "../models/message";

export const userConnected = async (uid: any) => {

    const user: any = await User.findById(uid)
    user.online = true;
    await user.save();

    return user;
};