const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');



const app = express();
app.use(cors());
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: 'postfix',
  host: 'localhost',
  secure: false,
  port: 25,
  tls: { rejectUnauthorized: false }
});

app.post('/sendMail', (req, res) => {
    const { name, email, _ } = req.body;
    let mailOptions = {
        from: 'cs@anoxsysnetworks.com',
        to: email,
        subject: 'Anoxsys Networks Site',
        text: `Dear ${name},\n\nThank you for reaching to us!\nOur customer services will contact you soon .`
    };
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.send({accepted: false});
            } else {
                console.log(info);
                res.send({accepted: true});
            }
        });
    }
    catch (e) {
        console.error(e);
        res.send({message: "fail to process email"})
    }
});

// Catch-all handler for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});