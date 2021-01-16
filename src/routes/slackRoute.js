const express = require('express');
const router = express.Router();
const slackController = require('../controller/slackController');

router.post('/', slackController.sendMessage);

module.exports = router;
