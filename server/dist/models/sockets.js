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
const socket_1 = require("../helpers/socket");
const generate_jwt_1 = require("../helpers/generate-jwt");
const channel_1 = require("../helpers/channel");
class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        // On user connecting
        this.io.on('connection', (socket) => __awaiter(this, void 0, void 0, function* () {
            const [isValid, uid] = (0, generate_jwt_1.checkJWT)(socket.handshake.query['x-token']);
            if (!isValid) {
                console.log('unidentified socket');
                return socket.disconnect();
            }
            yield (0, socket_1.userConnected)(uid);
            // On user joining a room, in this case a another user 
            socket.join(uid);
            // Sending the users-list
            this.io.emit('users-list', yield (0, socket_1.getUsers)());
            // Sending the channels
            this.io.emit('channels-list', yield (0, channel_1.channelsList)());
            // Sending a personal message
            socket.on('personal-message', (payload) => __awaiter(this, void 0, void 0, function* () {
                const message = yield (0, socket_1.saveMessage)(payload);
                this.io.to(payload.to).emit('personal-message', message);
                this.io.to(payload.from).emit('personal-message', message);
            }));
            // Sending a channel message
            socket.on('channel-message', (payload) => __awaiter(this, void 0, void 0, function* () {
                const message = yield (0, socket_1.saveMessage)(payload);
                const user = yield (0, socket_1.userConnected)(payload.from);
                this.io.emit('channel-message', { message, user });
                this.io.to(payload.to).emit('channel-message', { message, user });
            }));
            // On user typing
            socket.on('typing', (payload) => {
                this.io.to(payload.to).emit('typing', uid);
            });
            // On user stopping typing
            socket.on('stop-typing', (payload) => {
                this.io.to(payload.to).emit('stop-typing');
            });
            // On creating a channel
            socket.on('channel-created', (payload) => __awaiter(this, void 0, void 0, function* () {
                const channel = yield (0, channel_1.createChannel)(payload);
                this.io.emit('channel-created', channel);
            }));
            // On user disconnecting
            socket.on('disconnect', () => __awaiter(this, void 0, void 0, function* () {
                yield (0, socket_1.userDisconnected)(uid);
                this.io.emit('users-list', yield (0, socket_1.getUsers)());
                this.io.emit('users-list', yield (0, channel_1.channelsList)());
            }));
        }));
    }
    ;
}
exports.default = Sockets;
;
//# sourceMappingURL=sockets.js.map