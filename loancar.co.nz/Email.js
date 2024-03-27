// Importing required modules
require("dotenv").config(); // Load environment variables from .env file
const nodemailer = require("nodemailer");

// Function to send email
async function sendEmail(toEmail, subject, body) {
  try {
    // Create transporter using SMTP settings from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: toEmail,
      subject: subject,
      text: body,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage:
// Depending on the form filled, call the sendEmail function with the appropriate email address and data

// For form with 5 fields
const emailForForm1 = "enquiry@example.com"; // Replace with the actual email address
const subjectForForm1 = "New Enquiry Form";
const bodyForForm1 = `Field 1: ${field1Value}\nField 2: ${field2Value}\nField 3: ${field3Value}\nField 4: ${field4Value}\nField 5: ${field5Value}`;
sendEmail(emailForForm1, subjectForForm1, bodyForForm1);

// For form with 26 fields
const emailForForm2 = "admin@loancar.co.nz"; // Replace with the actual email address
const subjectForForm2 = "New Booking Request";
const bodyForForm2 = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phone}\nCity: ${city}\nDriver's License Number: ${driversLicenseNo}\nDriver's License Photo: ${driversLicensePhoto}\nPostal Address: ${postalAddress}\nAccident Description: ${accidentDescription}\nVehicles Involved: ${vehiclesInvolved}\nAccident Address: ${accidentAddress}\nFault: ${fault}\nCar Rego: ${carRego}\nCar Make: ${carMake}\nCar Model: ${carModel}\nCar Year: ${carYear}\nInsurance Company: ${insuranceCompany}\nClaim Number: ${claimNumber}\nKM In: ${kmIn}\nKM Out: ${kmOut}`;
sendEmail(emailForForm2, subjectForForm2, bodyForForm2);
