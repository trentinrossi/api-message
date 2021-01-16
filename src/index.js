const basicAuth = require('express-basic-auth');
const express = require('express');
const compression = require('compression');
const emailRoute = require('./routes/emailRoute');
const slackRoute = require('./routes/slackRoute');
const telegramRoute = require('./routes/telegramRoute');

const app = express();
const port = process.env.PORT || 3035;

app.use(
  basicAuth({
    users: { linkapi: 'components@20' },
  })
);

app.use(compression());
app.use(express.json());
app.use('/message/email', emailRoute);
app.use('/message/slack', slackRoute);
app.use('/message/telegram', telegramRoute);

var server = app.listen(port);
server.setTimeout(900000);

console.log(`API Messages started and running on port ${port}`);
