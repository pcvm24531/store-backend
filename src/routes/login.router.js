'use strict'
const express = require('express');
const router = express.Router();

const loginController = require('../login/login.controller');

router.post( 
    '/',
    loginController.auth
 );

 module.exports = router;