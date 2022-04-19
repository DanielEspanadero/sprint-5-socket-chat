// Express server
import  express, {Application} from "express";
import { createServer, Server as HttpServer } from "http";
import { Server as socketio } from "socket.io";
import path from "path";
import cors from "cors";
import Sockets from './sockets';
import { dbConnection } from '../database/config';

// Routes
import { authRouter } from "../routes/auth";
import { messagesRouter } from "../routes/messages";
import { channelRouter } from "../routes/channel";

class Server {
    private app: Application;
    private port: number | undefined | string;
    private server: HttpServer;
    private io: socketio;

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Connect to DB
        dbConnection();

        // Http server
        this.server = createServer( this.app );
        
        // Socket config
        this.io = new socketio( this.server, { /* options */ } );

        this.execute();
        this.middlewares();
    }

    private middlewares() {

        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
        this.app.use( cors() );
        this.app.use( express.json() );
        
        // API End Points
        this.app.use( '/api/login', authRouter );
        this.app.use( '/api/messages', messagesRouter );
        this.app.use( '/api/channel', channelRouter );
    }

    private setSockets() {
        new Sockets( this.io );
    }

    execute() {

        // Initializing sockets
        this.setSockets();

        // Initializing server
        this.server.listen( this.port, () => {
            console.log('Server listening on port:', this.port );
        });
    }

}

export default Server;