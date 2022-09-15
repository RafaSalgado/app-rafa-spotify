const express = require('express');
const {check} = require('express-validator');

const albumController = require('../controller/album-controller');
const router = express.Router();


router.get('/:album', check('album').isLength({min: 0}) , albumController.getAlbumByName);

module.exports = router;