'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');
const uploadImageMiddleware = require("../middlewares/uploadImage.middleware");
const encryptPassword = require('../middlewares/encrypt.middleware');

router.post(
    '/', 
    uploadImageMiddleware.upload.single('photo'),
    encryptPassword.encrypt,
    userController.save 
);
router.get('/', userController.get );
router.get('/:id', userController.getById );
router.put('/:id', userController.update );
router.delete('/:id', userController.remove );

module.exports = router;