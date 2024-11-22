'use strict'

const mongoose = require('mongoose');
const schema = require('./user.schema');

const DOCUMENT = 'user';
let user = mongoose.model(DOCUMENT, schema.userSchema);

async function save(data) {
    try {
        return await user.create(data);
    } catch (error) {
        return error;
    }
}

async function get(){
    try {
        return await user.find();
    } catch (error) {
        return error;
    }
}

async function getById(id) {
    try {
        return await user.findById(id);
    } catch (error) {
        return error;
    }
}

async function put(id, data) {
    try {
        await user.replaceOne( { _id: id }, data );
    return getById(id);
    } catch (error) {
        return error;
    }
}

async function remove(id){
    try {
        return  user.findOneAndDelete( { _id: id } );
    } catch (error) {
        return error;
    }
}

async function find(data) {
    try {
        return user.find( data );//Data debe llegar estructurado
    } catch (error) {
        return error;
    }
}

module.exports={
    save,
    get,
    getById,
    put,
    remove,
    find
}