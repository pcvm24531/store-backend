'use strict'

const userDB = require('./user.db');

function save(req, res) {
    return res.status(201).json({msg:'Create User'});
}
function get(req, res) {
    return res.status(200).json( userDB );
}
function update(req, res) {
    return res.status(200).json( {msg:'Update User'} )
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete User'});
}

module.exports = {
    save,
    get,
    update,
    remove
}