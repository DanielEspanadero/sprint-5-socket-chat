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
var SocketController_1 = require("../controllers/SocketController");
var jwt_1 = require("../helpers/jwt");
var socketEvents_1 = require("../config/socketEvents");
var ChannelController_1 = require("../controllers/ChannelController");
var Sockets = /** @class */ (function () {
    function Sockets(io) {
        this.io = io;
        this.socketEvents();
    }
    Sockets.prototype.socketEvents = function () {
        var _this = this;
        // On user connecting
        this.io.on(socketEvents_1.socketEvents.connection, function (socket) { return __awaiter(_this, void 0, void 0, function () {
            var _a, isValid, uid, _b, _c, _d, _e, _f, _g;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _a = (0, jwt_1.checkToken)(socket.handshake.query['x-token']), isValid = _a[0], uid = _a[1];
                        if (!isValid) {
                            console.log('unidentified socket');
                            return [2 /*return*/, socket.disconnect()];
                        }
                        return [4 /*yield*/, (0, SocketController_1.userConnected)(uid)];
                    case 1:
                        _h.sent();
                        // On user joining a room, in this case a another user 
                        socket.join(uid);
                        // Sending the users-list
                        _c = (_b = this.io).emit;
                        _d = [socketEvents_1.socketEvents.SERVER.USERS_LIST];
                        return [4 /*yield*/, (0, SocketController_1.getUsers)()];
                    case 2:
                        // Sending the users-list
                        _c.apply(_b, _d.concat([_h.sent()]));
                        // Sending the channels
                        _f = (_e = this.io).emit;
                        _g = [socketEvents_1.socketEvents.SERVER.CHANNELS_LIST];
                        return [4 /*yield*/, (0, ChannelController_1.channelsList)()];
                    case 3:
                        // Sending the channels
                        _f.apply(_e, _g.concat([_h.sent()]));
                        // Sending a personal message
                        socket.on(socketEvents_1.socketEvents.SERVER.PERSONAL_MESSAGE, function (payload) { return __awaiter(_this, void 0, void 0, function () {
                            var message;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, SocketController_1.saveMessage)(payload)];
                                    case 1:
                                        message = _a.sent();
                                        this.io.to(payload.to).emit(socketEvents_1.socketEvents.SERVER.PERSONAL_MESSAGE, message);
                                        this.io.to(payload.from).emit(socketEvents_1.socketEvents.SERVER.PERSONAL_MESSAGE, message);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        // Sending a channel message
                        socket.on(socketEvents_1.socketEvents.SERVER.CHANNEL_MESSAGE, function (payload) { return __awaiter(_this, void 0, void 0, function () {
                            var message, user;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, SocketController_1.saveMessage)(payload)];
                                    case 1:
                                        message = _a.sent();
                                        return [4 /*yield*/, (0, SocketController_1.userConnected)(payload.from)];
                                    case 2:
                                        user = _a.sent();
                                        this.io.emit(socketEvents_1.socketEvents.SERVER.CHANNEL_MESSAGE, { message: message, user: user });
                                        this.io.to(payload.to).emit(socketEvents_1.socketEvents.SERVER.CHANNEL_MESSAGE, { message: message, user: user });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        // On user typing
                        socket.on(socketEvents_1.socketEvents.SERVER.TYPING, function (payload) {
                            _this.io.to(payload.to).emit(socketEvents_1.socketEvents.SERVER.TYPING, uid);
                        });
                        // On user stopping typing
                        socket.on(socketEvents_1.socketEvents.SERVER.STOP_TYPING, function (payload) {
                            _this.io.to(payload.to).emit(socketEvents_1.socketEvents.SERVER.STOP_TYPING);
                        });
                        // On creating a channel
                        socket.on(socketEvents_1.socketEvents.SERVER.CHANNEL_CREATED, function (payload) { return __awaiter(_this, void 0, void 0, function () {
                            var channel;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, ChannelController_1.createChannel)(payload)];
                                    case 1:
                                        channel = _a.sent();
                                        this.io.emit(socketEvents_1.socketEvents.SERVER.CHANNEL_CREATED, channel);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        // On user disconnecting
                        socket.on(socketEvents_1.socketEvents.disconnection, function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d, _e, _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0: return [4 /*yield*/, (0, SocketController_1.userDisconnected)(uid)];
                                    case 1:
                                        _g.sent();
                                        _b = (_a = this.io).emit;
                                        _c = [socketEvents_1.socketEvents.SERVER.USERS_LIST];
                                        return [4 /*yield*/, (0, SocketController_1.getUsers)()];
                                    case 2:
                                        _b.apply(_a, _c.concat([_g.sent()]));
                                        _e = (_d = this.io).emit;
                                        _f = [socketEvents_1.socketEvents.SERVER.CHANNELS_LIST];
                                        return [4 /*yield*/, (0, ChannelController_1.channelsList)()];
                                    case 3:
                                        _e.apply(_d, _f.concat([_g.sent()]));
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Sockets;
}());
exports.default = Sockets;
//# sourceMappingURL=sockets.js.map