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
exports.saveMessage = exports.getUsers = exports.userDisconnected = exports.userConnected = void 0;
const user_1 = require("../models/user");
const message_1 = require("../models/message");
const userConnected = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findById(uid);
    user.online = true;
    yield user.save();
    return user;
});
exports.userConnected = userConnected;
const userDisconnected = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.User.findById(uid);
    user.online = false;
    yield user.save();
    return user;
});
exports.userDisconnected = userDisconnected;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User
        .find()
        .sort('-online');
    return users;
});
exports.getUsers = getUsers;
const saveMessage = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = new message_1.Message(payload);
        yield message.save();
        return message;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.saveMessage = saveMessage;
//# sourceMappingURL=socket.js.map