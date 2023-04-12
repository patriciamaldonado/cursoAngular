const {response} = require('express');


const crearUsuario = (req, res = response) =>{

    const {email, name, password} = req.body;

    return res.json({
        ok:true,
        msg: 'Crear usuario /new'
    });
}


// Login de usuario
const loginUsuario =  (req, res = response) =>{

    const {email, password} = req.body;

    return res.json({
        ok:true,
        msg: 'Login de usuario /'
    });
}

// Validar y revalidar token
const validarToken = (req, res = response) =>{
    
    return res.json({
        ok:true,
        msg: 'Renew'
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    validarToken
}


// GET

// app.get('/', (req, res) => {
//     res.status(200).json({ // 404 el rescurso no se encontro, 500 la peticion o se hizo bien problema interno del servidor
//         ok: true,
//         msg: 'Todo salio bien',
//         uid: 1234
//     });
// });