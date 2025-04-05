const express = require('express');
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT =process.env.PORT || 300;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: true}));


// Nodemailer configaration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'george.matasi@gmail.com', // Your email
        pass: 'your-email-password' // Your email password or app password
    }
})

//Endpoint to handle form submition
app.post('/send-email', (req, res) =>{
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'george.matasi@gmail.com', // Company's email
        subject: 'New contact From Submission from ${name}',
        text: message
    };

    transporter.sendemail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.roString());
        }
        res.status(200).send('Email sent: ' + info.response);
    })
})

//Start the server
app.listen(PORT, () => {
    console.log('server is running on http://localhost:${PORT}');
});