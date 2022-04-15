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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const config_1 = require("../database/config");
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
        this.connectDB();
        this.routes();
        this.sockets();
        this.listen();
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
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