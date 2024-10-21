'use strict'

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    lastNmae: String,
    ci: String,
    userName: String,
    password: String,
    phone: String,
    address: String,
    birthdate: { type: Date },
},
{
    versionKey:false,
}
);

module.exports = {
    userSchema
}