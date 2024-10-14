'use strict'

function save(req, res) {
    return res.status(201).json({msj:'Create Product'});
}
function get(req, res) {
    return res.status(200).json({msg:'Get Product'});
}
function update(req, res) {
    return res.status(200).json({msg:'Update Product'});
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete Product'});
}

module.exports = {
    save,
    get,
    update,
    remove
};