const express = require('express');
const router = express.Router();
const telegramController = require('../controller/telegramController');

router.post('/', telegramController.sendMessage);

module.exports = router;
