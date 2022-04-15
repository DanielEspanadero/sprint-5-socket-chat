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
exports.getPersonalConversation = void 0;
const message_1 = require("../models/message");
const getPersonalConversation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myId = req.uid;
    const messageFrom = req.params.from;
    const last10 = yield message_1.Message.find({
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
});
exports.getPersonalConversation = getPersonalConversation;
//# sourceMappingURL=message.js.map