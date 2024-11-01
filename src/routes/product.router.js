'use strict'

const express = require("express");
const router = express.Router();
const productController = require('../product/product.controller');
const productMuddleware = require('../product/product.middleware');

router.post(
    '/', 
    productMuddleware.upload.single('image'), 
    productController.save 
);
router.get( '/', productController.get );
router.get( '/:id', productController.getById );
router.put( '/:id', productController.update );
router.delete( '/:id', productController.remove );

module.exports = router;
