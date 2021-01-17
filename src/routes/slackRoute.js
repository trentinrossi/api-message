const express = require('express');
const router = express.Router();
const slackController = require('../controller/slackController');

router.post('/webhook', slackController.sendHooksMessage);

module.exports = router;
