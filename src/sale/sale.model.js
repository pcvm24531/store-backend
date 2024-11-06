'use strict'

const db = require('./sale.db');

function save(data) {
    return db.save(data);
}
function getAll() {
    return db.getAll();
}
function getById(id) {
    return db.getById(id);
}
module.exports = {
    save,
    getAll,
    getById
}