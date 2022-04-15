"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
// import Sockets from './sockets';
// Routes
const prueba_1 = __importDefault(require("../routes/prueba"));
class Server {
    constructor() {
        this.path = {
            prueba: '/prueba'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        // Http server
        this.server = (0, http_1.createServer)(this.app);
        // Configuraciones de sockets
        this.io = new socket_io_1.Server(this.server, { /* options */});
        this.routes();
        this.sockets();
        this.listen();
    }
    routes() {
        this.app.use(this.path.prueba, prueba_1.default);
    }
    setSockets() {
        // new Sockets(this.io);
    }
    // Initializing sockets
    sockets() {
        this.setSockets();
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map