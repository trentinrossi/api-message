const { TelegramClient } = require('messaging-api-telegram');

function sendMessage(req, res) {
  const client = new TelegramClient({
    accessToken: 'xxxxx',
  });

  await client.sendMessage(CHAT_ID, 'hi', {
    disableWebPagePreview: true,
    disableNotification: true,
  });

  return res.status(200).json('OK');
}

module.exports = {
  sendMessage,
};
