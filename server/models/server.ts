import express, { Application } from 'express';
import { createServer, Server as HttpServer } from "http";
import { Server as socketio } from "socket.io";
import { dbConnection } from '../database/config';
import cors from "cors";
// import Sockets from './sockets';


// Routes
import authRouter from '../routes/auth';
import messageRoute from '../routes/message'

class Server {
    private app: Application;
    private port: String;
    private server: HttpServer;
    private io: socketio;
    private path = {
        auth: '/api/login',
        message: '/api/messages'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT!;

        // Http server
        this.server = createServer(this.app);

        // Configuraciones de sockets
        this.io = new socketio(this.server, { /* options */ });

        this.connectDB();
        this.routes();
        this.sockets();
        this.listen();
    }

    async connectDB(){
        await dbConnection();
    }

    routes() {
        this.app.use(this.path.auth, authRouter);
        this.app.use(this.path.message, messageRouter);
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