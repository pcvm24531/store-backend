'use strict'

function save(req, res) {
    return res.status(201).json({msg:'Create Client'});
}
function get(req, res) {
    return res.status(200).json({msg:'Get Client'});
}
function update(req, res) {
    return res.status(200).json({msg:'Update Client'});
}
function remove(req, res) {
    return res.status(200).json({msg:'Delete Client'});
}

module.exports = {
    save,
    get,
    update,
    remove
};