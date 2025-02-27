require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

async function sendEmail(toEmail, subject, body) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: toEmail, // The email address to send to
      subject: subject,
      text: body,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error:", error);
  }
}

app.post("/send-email", (req, res) => {
  const { firstName, lastName, phone, email, extraInfo } = req.body;

  // Define the email address and subject for the form
  const emailForForm = "enquiry@loancar.co.nz"; // Replace with the actual email address
  const subject = "New Booking Request";

  // Construct the email body from the form data
  const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone}\nExtra Information: ${extraInfo}`;

  // Call the sendEmail function
  sendEmail(emailForForm, subject, body)
    .then(() => res.status(200).send("Email sent successfully"))
    .catch((error) => res.status(500).send("Failed to send email"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
