'use strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        description:{
            type: String,
            reuired: true,
            trim: true
        },
        //Tipo del producto
        category:{
            type: String,
            required: true,
            trim: true,
            enum:['Analgésicos','Antibióticos','Suplementos']
        },
        //Principio activo: ingrediente principal Ej: Ibuprofeno
        active_ingredient:{
            type: String,
            required: true,
            trim:true
        },
        //Cantidad de principio activo ej(500 mg)
        concentration:{
            type: String,
            required: true,
            trim: true
        },
        //Forma farmaceutica: tableta, jarabe, captsula
        pharmaceutical_form:{
            type: String,
            required: true,
            enum:['Tableta','Jarabe','Cápsula']
        },
        //Número de unidades por empaque Ej: 20tabletas
        quantity_per_unit:{
            type: Number,
            required: true,
            trim: true
        },
        manufacturing_date:{
            type: Date,
            required: true
        },
        expiration_date:{
            type: Date,
            required: true
        },
        //Número de serie del lote de producción
        lot_number:{
            type: String,
            required: true,
            trim: true
        },
        //Nombre del fabricante
        manufacturer:{
            type: String,
            required: true
        },
        //precio de compra
        purchase_price:{
            type: mongoose.Types.Decimal128,
            required: true
        },
        sale_price:{
            type: mongoose.Types.Decimal128,
            required: true
        },
        current_stock:{
            type: Number,
            required: true
        },
        minimun_stock:{
            type: Number,
            required: true
        },
        //Ubicación física en almacen Ej. estate A3
        location:{
            type: String,
            required: true,
            trim:true
        },
        //Registro sanitario
        sanitary_record:{
            type: String,
        },
        //Condicion de almacenamiento, recomendación de conservación Ej. temperatura, humedad
        storage_condition:{
            type: String
        },
        //Es de venta libre?
        free_sale:{
            type: Boolean,
            default: false
        },
        //Precauciones y efectos secundarios
        warning:{
            type: String,
            trim: true
        },
        //Datos del proveedor
        supplier:{
            type: String,
            trim: true
        },
        //Contacto de proveedor
        supplier_contact:{
            type: String,
            trim: true
        },
        image:{
            type: String,
            default: null,
            trim: true
        }
    },
    {
        versionKey: false,
        timestamps:{createdAt:'create_at', updatedAt:'updated_at'}
    }
);

module.exports = {
    productSchema
}