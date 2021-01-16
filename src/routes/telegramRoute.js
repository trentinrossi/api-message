const express = require('express');
const router = express.Router();
const telegramController = require('../controller/telegramController');

router.post('/:telegram', telegramController.sendMessage);

module.exports = router;
