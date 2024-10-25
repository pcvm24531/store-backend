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
.put('/:id', userController.update )
.delete('/:id', userController.remove )
.get('/:id', userController.getById );

module.exports = router;