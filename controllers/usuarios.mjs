import { response } from 'express';
import { request } from 'express';

const usuariosGet = (req = request, res = response) => {
    
    const { page = '1', limit = '10' } = req.query;
    
    res.json({
        codmsg: '00',
        msg: `get`,
        page,
        limit
    });
}

const usuariosPut = (req = request, res = response) => {
    
    const id = req.params.id; 

    res.status(201).json({
        codmsg: '00',
        msg: `put del Id: ${ id }`
    });
}

const usuariosPost = (req = request, res = response) => {
    
    const { nombre, edad } = req.body;

    res.json({
        codmsg: '00',
        msg: `Post de ${ nombre }, ${ edad } años`
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        codmsg: '00',
        msg: 'Delete API - controlador'
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        codmsg: '00',
        msg: 'Patch API - controlador'
    });
}

export {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}