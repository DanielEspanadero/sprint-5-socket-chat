"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsList = exports.getChannel = exports.getChannels = exports.getUserName = exports.createChannel = void 0;
const channel_1 = require("../models/channel");
const user_1 = require("../models/user");
const createChannel = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = payload;
        const isChannelExist = yield channel_1.Channel.findOne({ name });
        if (isChannelExist) {
            console.log('Name already in use');
            return;
        }
        ;
        const channel = new channel_1.Channel({ name });
        channel.type = 'channel';
        yield channel.save();
        return channel;
    }
    catch (error) {
        console.log(error);
        return false;
    }
    ;
});
exports.createChannel = createChannel;
const getUserName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield user_1.User.findById(id);
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
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
    ;
});
exports.getUserName = getUserName;
const getChannels = () => __awaiter(void 0, void 0, void 0, function* () {
    const channels = yield channel_1.Channel.find();
    return channels;
});
exports.getChannels = getChannels;
const getChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const existingChannel = yield channel_1.Channel.findOne({ name });
        if (existingChannel) {
            return res.status(400).json({
                ok: false,
                message: name,
            });
        }
        else {
            return res.status(200).json({
                ok: true,
                message: name,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: "Something went wrong"
        });
        return false;
    }
    ;
});
exports.getChannel = getChannel;
const channelsList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const channels = yield channel_1.Channel.find();
        return channels;
    }
    catch (err) {
        console.log(err);
    }
});
exports.channelsList = channelsList;
//# sourceMappingURL=channel.js.map