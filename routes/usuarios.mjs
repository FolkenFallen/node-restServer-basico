import { Router } from 'express';
import * as url from 'url';
import {
            usuariosGet, 
            usuariosPut, 
            usuariosPost, 
            usuariosDelete, 
            usuariosPatch 
        } from '../controllers/usuarios.mjs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('..', import.meta.url));
const router = Router();

// API get
router.get('/', usuariosGet)

// API put
router.put('/:id', usuariosPut)

// API post
router.post('/', usuariosPost)

// API delete
router.delete('/', usuariosDelete)

// API patch
router.patch('/', usuariosPatch)

export { router }
