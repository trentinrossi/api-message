const express = require('express');
const router = express.Router();
const slackController = require('../controller/slackController');

router.post('/:slack', slackController.sendMessage);

module.exports = router;
