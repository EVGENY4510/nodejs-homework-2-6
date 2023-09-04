const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;
const { META_USER } = process.env;

const nodeMailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodeMailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: META_USER };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
