"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelRouter = void 0;
/*
    Path: api/messages
*/
var express_1 = require("express");
var ChannelController_1 = require("../controllers/ChannelController");
var auth_1 = require("../middlewares/auth");
var router = (0, express_1.Router)();
exports.channelRouter = router;
router.post('/', auth_1.validateJWT, ChannelController_1.createChannel);
router.get('/:name', auth_1.validateJWT, ChannelController_1.getChannel);
router.get('/', auth_1.validateJWT, ChannelController_1.getChannels);
router.get('/users/:id', auth_1.validateJWT, ChannelController_1.getUserName);
//# sourceMappingURL=channel.js.map