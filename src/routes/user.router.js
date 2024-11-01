'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');
const userMiddleWare = require("../user/user.middleware");

router.post(
    '/', 
    userMiddleWare.upload.single('photo'), 
    userController.save 
);
router.get('/', userController.get );
router.get('/:id', userController.getById );
router.put('/:id', userController.update );
router.delete('/:id', userController.remove );

module.exports = router;