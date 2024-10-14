'use strict'

function save(req, res) {
    return res.status(201).json({msg:'Create Sale'});
}
function get(req, res) {
    return res.status(200).json({msg:'Get Sale'});
}
function update(req, res) {
    return res.status(200).json({msg:'Update Sale'});
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete Sale'});
}

module.exports = {
    save,
    get,
    update,
    remove
}