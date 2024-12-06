'use strict'

const db = require('./client.db');

function save(client) {
    return db.save(client);
}

function getAll(){
    return db.get();   
}

function getById(id) {
    return db.getById(id);
}

function put(id, client) {
    return db.put(id, client);
}

function remove(id){
    return db.remove(id);
}

module.exports = {
    save,
    getAll,
    getById,
    put,
    remove
}