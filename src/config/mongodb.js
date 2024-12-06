'use strict'
const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DB_NAME;
const REF = process.env.DB_REF;

async function connect() {
    await mongoose.connect( REF+DB, {
        useUnifiedTopology: true,
        useNewUrlParser:true,
    } );
    console.log(`Database ${DB} connected...`);
}

module.exports = {
    connect
};