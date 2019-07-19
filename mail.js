nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "capitalcloudsolutions@outlook.com",
    pass: "Jaynutisacraynut!123"
  }
});
