const axios = require('axios').default;

function sendHooksMessage(req, res) {
  const hookUrl = req.body.hookUrl;
  return res.status(200).json('OK');
}

module.exports = {
  sendHooksMessage,
};
