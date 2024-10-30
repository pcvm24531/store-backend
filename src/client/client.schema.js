'use strict'

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let clientSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        lastname:{
            type: String,
            required: true,
            trim: true
        },
        ci:{
            type: String,
            required: true,
            trim: true
        },
        nit:{
            type: String,
            trim: true
        },
        email:{
            type: String,
            unique: true,
            sparse: true,
            lowercase: true,
            trim: true
        },
        phone:{
            type: String,
            trim: true
        },
        address:{
            type: String,
            trim: true
        },
        birthdate:{
            type: Date
        },
        creation_date:{
            type: Date,
            default: Date.now
        }
    }
);

module.exports = { clientSchema }