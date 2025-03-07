'use strict'

const SALT_ROUNDS = 15;
const KEY = 'nodejs';
const COURSE = 'tokenJS';
const MAX_INACTIVITY_TIME = 30*60*1000;//30 Minutos en milisegundos

module.exports = {
    SALT_ROUNDS,
    KEY, 
    COURSE,
    MAX_INACTIVITY_TIME
}