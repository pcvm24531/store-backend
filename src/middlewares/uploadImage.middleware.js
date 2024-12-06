'use strict'

const multer = require('multer');//Libreria que permite la carga de archivos

//Configuramos los datos del archivo a subir
const config = multer.diskStorage(
    {
        //Indicamos la ubicación donde guardaremos el archivo
        destination: (req, file, cb)=>{
            cb( null, 'photos/' )
        },
        //Establecemos el nombre del archivo
        filename: (req, file, cb)=>{
            cb( null, `${(Date.now())}-${file.originalname}` )
        }
    }
);

const upload = multer(
    {
        storage: config
    }
);

module.exports = {
    upload
};