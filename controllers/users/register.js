const crypto = require("node:crypto");

const bcrypt = require("bcrypt");

const gravatart = require("gravatar");

const User = require("../../models/user");

const { HttpError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();

  if (user) {
    throw HttpError(409, `${email} in use`);
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatart.url(email);
  const verificationToken = crypto.randomUUID();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Test email",
    html: `<p>To confirm your registration, please click on the link below:</p>
    <a href="${BASE_URL}/api/users/verify/${verificationToken}">Click me</a>`,
    text: `To confirm your registration, please click on the link below:\n
    ${BASE_URL}/api/users/verify/${verificationToken}
    `,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      password: newUser.password,
    },
  });
};

module.exports = register;
