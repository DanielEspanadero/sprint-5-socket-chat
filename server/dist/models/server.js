"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express server
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var sockets_1 = __importDefault(require("./sockets"));
var config_1 = require("../database/config");
// Routes
var auth_1 = require("../routes/auth");
var messages_1 = require("../routes/messages");
var channel_1 = require("../routes/channel");
var _404_1 = require("../routes/404");
var Server = /** @class */ (function () {
    function Server() {
        this.path = {
            auth: '/api/login',
            messages: '/api/messages',
            channel: '/api/channel',
            error404: '/*'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        // Connect to DB
        (0, config_1.dbConnection)();
        // Http server
        this.server = (0, http_1.createServer)(this.app);
        // Socket config
        this.io = new socket_io_1.Server(this.server, { /* options */});
        this.execute();
        this.middlewares();
    }
    Server.prototype.middlewares = function () {
        this.app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        // API End Points
        this.app.use(this.path.auth, auth_1.authRouter);
        this.app.use(this.path.messages, messages_1.messagesRouter);
        this.app.use(this.path.channel, channel_1.channelRouter);
        this.app.use(this.path.error404, _404_1.errorRouter);
    };
    Server.prototype.setSockets = function () {
        new sockets_1.default(this.io);
    };
    Server.prototype.execute = function () {
        var _this = this;
        // Initializing sockets
        this.setSockets();
        // Initializing server
        this.server.listen(this.port, function () {
            console.log('Server listening on port:', _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map