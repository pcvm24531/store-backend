'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller')

router.get('/', userController.get );
router.post('/', userController.save );
router.put('/', userController.update );
router.delete('/', userController.remove );

module.exports = router;