import express, { Application } from 'express';

import routerPrueba from '../routes/prueba';

class Server {
    private app: Application;
    private port: String;
    private path = {
        prueba: '/prueba'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT!;

        this.routes();
        this.listen();
    }

    routes(){
        this.app.use(this.path.prueba, routerPrueba);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        });
    };
};

export default Server;