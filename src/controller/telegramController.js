const { TelegramClient } = require('messaging-api-telegram');

function sendMessage(req, res) {
  const client = new TelegramClient({
    accessToken: '1575648477:AAHR0-3pjeTU7M4KVBuGYs3V8y9vkbT46fI',
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
