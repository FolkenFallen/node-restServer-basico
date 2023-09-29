import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import * as url from 'url';
import { router } from '../routes/usuarios.mjs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('..', import.meta.url));

class Server {

    constructor() {

        // Express
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();

    }

    middlewares () {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes () {

        this.app.use( this.usuariosPath, router );

    }

    listen () {

        // Puerto
        this.app.listen( this.port, '0.0.0.0', () => {
            console.log(`Servidor escuchando el puerto ${ this.port }`);
        });

    }

}

export { Server }
