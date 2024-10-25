'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');
const userMiddleWare = require("../user/user.middleware");

router.get('/', userController.get )
.post(
    '/', 
    userMiddleWare.upload.single('photo'), 
    userController.save 
)
.put('/', userController.update )
.delete('/', userController.remove )
.get('/:id', userController.getById );

module.exports = router;