'use strict'

const express = require("express")

const router = express.Router();
const clientController = require('../client/client.controller');

router.get( '/', clientController.get );
router.post( '/', clientController.save );
router.put( '/', clientController.update );
router.delete( '/', clientController.remove );

module.exports = router;