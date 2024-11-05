'use strict'

const db = require('./sale.db');

function save(data) {
    return db.save(data);
}

module.exports = {
    save
}