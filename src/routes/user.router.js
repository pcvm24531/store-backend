'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller')

router.get('/', userController.get )
.post('/', userController.save )
.put('/', userController.update )
.delete('/', userController.remove )
.get('/:id', userController.getById );

module.exports = router;