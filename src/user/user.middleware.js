'use strict'

const multer = require('multer');//Libreria nos permite cargar archivos

//Configuramos los datos del file a subir
const config = multer.diskStorage({
    //Inidicamos que el detino será la carpeta fotos
    destination: (req, file, cb)=>{
        cb(null, 'photos/')
    },
    //Aqui asignamos el nombre del archivo
    filename:(req, file, cb)=>{
        cb(null, `${(Date.now())}-${file.originalname}`)
    }
});

const upload = multer({
    storage: config
});

module.exports = {
    upload
};