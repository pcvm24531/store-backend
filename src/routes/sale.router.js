'use strict'

const express = require("express")

const router = express.Router();
const saleController = require('../sale/sale.controller');

router.post('/', saleController.save);
router.get('/', saleController.get);
router.get('/:id', saleController.getById);
router.put('/:id/:statusSale', saleController.updateStatus);

module.exports = router;