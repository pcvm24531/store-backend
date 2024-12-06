'use strict'

const express = require("express");
const router = express.Router();
const productController = require('../product/product.controller');
const uploadImageMiddleware = require('../middlewares/uploadImage.middleware');

router.post(
    '/', 
    uploadImageMiddleware.upload.single('image'), 
    productController.save 
);
router.get( '/', productController.get );
router.get( '/:id', productController.getById );
router.put( '/:id', productController.update );
router.delete( '/:id', productController.remove );

module.exports = router;
