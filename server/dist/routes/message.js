"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_1 = require("../controllers/message");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
router.get('/personal/:from', validate_jwt_1.validateToken, message_1.getPersonalConversation);
router.get('/channel/:from', validate_jwt_1.validateToken, message_1.getChannelConversation);
exports.default = router;
//# sourceMappingURL=message.js.map