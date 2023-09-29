import { Server } from './models/server.mjs'; 

// Datos generales
const datos = {
  nombre: 'Rodrigo Salgado',
  titulo: 'Curso de Node'
};

const Servidor = new Server();

Servidor.listen();
