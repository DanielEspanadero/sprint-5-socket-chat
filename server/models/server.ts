import express, { Application } from 'express';
import { createServer, Server as HttpServer } from "http";
import { Server as socketio } from "socket.io";
import cors from "cors";
// import Sockets from './sockets';


// Routes
import routerPrueba from '../routes/prueba';

class Server {
    private app: Application;
    private port: String;
    private server: HttpServer;
    private io: socketio;
    private path = {
        prueba: '/prueba'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT!;

        // Http server
        this.server = createServer(this.app);

        // Configuraciones de sockets
        this.io = new socketio(this.server, { /* options */ });

        this.routes();
        this.sockets();
        this.listen();
    }

    routes() {
        this.app.use(this.path.prueba, routerPrueba);
    }

    private setSockets() {
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
    };
};

export default Server;