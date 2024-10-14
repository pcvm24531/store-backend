'use strict'

const express = require("express")

const router = express.Router();
const saleController = require('../sale/sale.controller');

router.get('/', saleController.get);
router.post('/', saleController.save);
router.put('/', saleController.update);
router.delete('/', saleController.remove);

module.exports = router;