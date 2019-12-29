const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'key-b7c9bdeacb2e2b5fb772b4b97519382a',
        domain: 'sandboxd0e2fd7efddb4fbb98db35f3328039e6.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (username, company, email, phone, theme, products, message, cb) => {

    const mailOptions = {
        from: email,
        to: 'termohimltd@gmail.com',
        subject: theme,
        text: `ім'я: ${username},
        компанія: ${company},
        номер телефону: ${phone},
        вид продукції: ${products},
        повідомлення: ${message}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}


module.exports = sendMail;