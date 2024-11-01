'use strict'

const db = require('./product.db');

function save(product) {
    return db.save(product);
}
function getAll() {
    return db.getAll();
}
function getById(id) {
    return db.getById( id );
}
function update( id, data ) {
    return db.update( id, data );
}
function remove(id) {
    return db.remove(id);
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}