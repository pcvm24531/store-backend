'use strict'

const express = require("express")

const router = express.Router();
const saleController = require('../sale/sale.controller');

router.post('/', saleController.save);
router.get('/', saleController.get);
router.put('/', saleController.update);
router.delete('/', saleController.remove);

module.exports = router;