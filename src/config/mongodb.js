'use strict'
const mongoose = require('mongoose');

const DB = 'storeBackend';
const REF = 'mongodb://localhost:27017/';

async function connect() {
    await mongoose.connect( REF+DB, {
        useUnifiedTopology: true,
        useNewUrlParser:true,
    } );
    console.log(`Database ${DB} connect...`);
}

module.exports = {
    connect
};