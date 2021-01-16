function sendEmail(req, res) {
  return res.status(200).json(req); 
}

module.exports = {
  sendEmail,
};
