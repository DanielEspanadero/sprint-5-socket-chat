import { User } from "../models/user";
import { Message } from "../models/message";

export const userConnected = async (uid: any) => {
    const user: any = await User.findById(uid)
    user.online = true;
    await user.save();

    return user;
};

export const userDisconnected = async (uid: any) => {
    const user: any = await User.findById(uid);
    user.online = false;
    await user.save();

    return user;
};


export const getUsers = async () => {
    const users = await User
        .find()
        .sort('-online');

    return users;
}