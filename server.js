const express = require('express');
const path = require('path');
const sendMail = require('./js/email')
const app = express();
const port = 80;


app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(__dirname));
app.use(express.json());

app.post('/email', (req, res) => {

    const { username, company, email, phone, theme, products, message } = req.body;
    console.log('Data: ', req.body);

    sendMail(username, company, email, phone, theme, products, message, (err, data) => {
        if (err) {
            req.status(500).json({ message: 'Internal Error!' });
        } else {
            res.json({ message: 'Email sent!!!' });
        }
    });
});

app.get('/', (req, res) => {

    console.log(req.method);
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
    console.log(`the server is running on port: ${port}`);
})
