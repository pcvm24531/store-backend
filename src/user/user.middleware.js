'use strict'

const multer = require('multer');//Libreria nos permite cargar archivos

const storage = multer.diskStorage({
    //Inidicamos que el detino será la carpeta fotos
    destination: (req, file, cb)=>{
        cb(null, 'photos/')
    },
    filename:(req, file, cb)=>{
        cb(null, `${(Date.now())}-${file.originalname}`)
    }
});

const upload = multer({
    storage: storage
});

module.exports = {
    upload
};