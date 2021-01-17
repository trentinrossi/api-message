const axios = require('axios').default;

async function sendHooksMessage(req, res) {
  const { hookUrl, message } = req.body;

  try {
    const response = await axios.post(hookUrl, {
      text: message,
    });

    console.log(`Message to Slack Hooks sended successfully: ${response.status}`);
    return res.status(200).json('OK');
  } catch (error) {
    if (error.response) {
      console.error(
        `Error to send a message in Slack Hook: ${error.response.data}`
      );
      return res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      console.error(`Error to send a message in Slack Hook: ${error.request}`);
      return res.status(500).json(error.request);
    } else {
      console.error(`Error to send a message in Slack Hook: ${error.message}`);
      return res.status(500).json(error.message);
    }
  }
}

module.exports = {
  sendHooksMessage,
};
