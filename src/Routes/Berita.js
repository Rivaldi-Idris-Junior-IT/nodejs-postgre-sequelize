const express = require('express');
const router = express.Router();
const controller = require('../Controller/Berita')

router.get('/', controller.getall);

module.exports = router