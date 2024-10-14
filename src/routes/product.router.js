'use strict'

const express = require("express");
const router = express.Router();
const productController = require('../product/product.controller');

router.get( '/', productController.get );
router.post('/', productController.save );
router.put( '/', productController.update );
router.delete( '/', productController.remove );

module.exports = router;
