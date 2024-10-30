'use strict'

const mongoose = require('mongoose');
const schema = require('./client.schema');

const DOCUMENT = 'client';
let client = mongoose.model(DOCUMENT, schema.clientSchema);

async function save(data) {
    return await client.create(data);
}

async function get() {
    return await client.find();
}

async function getById(id) {
    return await client.findById(id);
}

async function put(id, data) {
    await client.replaceOne( {_id: id}, data );
    return getById(id);
}

async function remove(id) {
    return await client.findOneAndDelete( {_id: id} );
}
module.exports = {
    save,
    get,
    getById,
    put,
    remove
}