'use strict'

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    ci: {
        type: String,
        unique: true,
        sparse: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    birthdate: { 
        type: Date 
    },
    photo: {
        type: String,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true
    },
    user_type: {
        type: String,
        enum:['Administrador','Farmacéutico','Cajero','Almacenista'],
        default: 'Cajero'
    },
    lastConection: { 
        type: Date ,
        default: null
    },
    privileges: {
        type: String,
        enum:['ver_inventario','modifica_inventario','renera_reporte','realiza_venta','gestiona_usuario'],
        defalt:[]
    },
    creation_date: { 
        type: Date ,
        default: Date.now
    },
},
{
    versionKey:false,
    timestamps:{createdAt: 'creation_date', updatedAt: 'last_update'}
}
);

module.exports = {
    userSchema
}