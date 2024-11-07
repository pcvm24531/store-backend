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
function update(id, status) {
    return db.updateStatusSale(id, status);
}
module.exports = {
    save,
    getAll,
    getById,
    update
}