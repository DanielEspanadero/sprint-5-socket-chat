"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesRouter = void 0;
/*
    Path: api/messages
*/
var express_1 = require("express");
var MessageController_1 = require("../controllers/MessageController");
var auth_1 = require("../middlewares/auth");
var router = (0, express_1.Router)();
exports.messagesRouter = router;
router.get('/personal/:from', auth_1.validateJWT, MessageController_1.getPersonalConversation);
router.get('/channel/:from', auth_1.validateJWT, MessageController_1.getChannelConversation);
//# sourceMappingURL=messages.js.map