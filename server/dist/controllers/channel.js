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
exports.createChannel = void 0;
const channel_1 = require("../models/channel");
const createChannel = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = payload;
        const isChannelExist = yield channel_1.Channel.findOne({ name });
        if (isChannelExist) {
            console.log("Name already in use");
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
//# sourceMappingURL=channel.js.map