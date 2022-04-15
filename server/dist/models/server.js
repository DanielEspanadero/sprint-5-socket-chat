"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prueba_1 = __importDefault(require("../routes/prueba"));
class Server {
    constructor() {
        this.path = {
            prueba: '/prueba'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.routes();
        this.listen();
    }
    routes() {
        this.app.use(this.path.prueba, prueba_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map