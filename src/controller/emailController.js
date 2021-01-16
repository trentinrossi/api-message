function sendEmail(req, res) {
  return res.status(200).json("OK"); 
}

module.exports = {
  sendEmail,
};
