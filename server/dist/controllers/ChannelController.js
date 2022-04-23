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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsList = exports.getChannel = exports.getChannels = exports.getUserName = exports.createChannel = void 0;
var channel_1 = require("../models/channel");
var user_1 = require("../models/user");
function createChannel(payload) {
    return __awaiter(this, void 0, void 0, function () {
        var name_1, isChannelExist, channel, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    name_1 = payload.name;
                    return [4 /*yield*/, channel_1.Channel.findOne({ name: name_1 })];
                case 1:
                    isChannelExist = _a.sent();
                    if (isChannelExist) {
                        console.log('Name already in use');
                        return [2 /*return*/];
                    }
                    channel = new channel_1.Channel({ name: name_1 });
                    channel.type = 'channel';
                    return [4 /*yield*/, channel.save()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, channel];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createChannel = createChannel;
function getUserName(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, user, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, user_1.User.findById(id)];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        return [2 /*return*/, res.status(404).json({ ok: false, msg: 'User not found' })];
                    }
                    return [2 /*return*/, res.json({
                            ok: true,
                            user: user,
                        })];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [2 /*return*/, res.status(500).json(err_2)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserName = getUserName;
var getChannels = function () { return __awaiter(void 0, void 0, void 0, function () {
    var channels;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, channel_1.Channel.find()];
            case 1:
                channels = _a.sent();
                return [2 /*return*/, channels];
        }
    });
}); };
exports.getChannels = getChannels;
function getChannel(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name_2, existingChannel, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    name_2 = req.params.name;
                    return [4 /*yield*/, channel_1.Channel.findOne({ name: name_2 })];
                case 1:
                    existingChannel = _a.sent();
                    if (existingChannel) {
                        return [2 /*return*/, res.json({
                                ok: false,
                                message: name_2,
                            })];
                    }
                    else {
                        return [2 /*return*/, res.json({
                                ok: true,
                                message: name_2,
                            })];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.log(err_3);
                    res.status(500).json({ ok: false, msg: 'Something went wrong' });
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getChannel = getChannel;
var channelsList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var channels, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, channel_1.Channel.find()];
            case 1:
                channels = _a.sent();
                return [2 /*return*/, channels];
            case 2:
                err_4 = _a.sent();
                console.log(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.channelsList = channelsList;
//# sourceMappingURL=ChannelController.js.map