"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketEvents = void 0;
exports.socketEvents = {
    connection: 'connection',
    disconnection: 'disconnect',
    CLIENT: {
        USERS_LIST: 'users-list',
        PERSONAL_MESSAGE: 'personal-message',
        TYPING: 'typing',
        STOP_TYPING: 'stop-typing',
        CHANNELS_LIST: 'channels-list',
        CHANNEL_MESSAGE: 'channel-message',
        CHANNEL_CREATED: 'channel-created'
    },
    SERVER: {
        USERS_LIST: 'users-list',
        PERSONAL_MESSAGE: 'personal-message',
        TYPING: 'typing',
        STOP_TYPING: 'stop-typing',
        CHANNELS_LIST: 'channels-list',
        CHANNEL_MESSAGE: 'channel-message',
        CHANNEL_CREATED: 'channel-created'
    }
};
//# sourceMappingURL=socketEvents.js.map