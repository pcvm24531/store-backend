'use strict'

const express = require("express")

const router = express.Router();
const clientController = require('../client/client.controller');

router.get( '/', clientController.getAll );
router.get( '/:id', clientController.getById );
router.post( '/', clientController.save );
router.put( '/:id', clientController.update );
router.delete( '/:id', clientController.remove );

module.exports = router;