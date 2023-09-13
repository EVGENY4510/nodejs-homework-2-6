const User = require("../../models/user");

const { HttpError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email }).exec();
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Test email",
    html: `<p>To confirm your registration, please click on the link below:</p>
    <a href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click me</a>`,
    text: `To confirm your registration, please click on the link below:\n
    ${BASE_URL}/api/users/verify/${user.verificationToken}
    `,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verify email send",
  });
};

module.exports = resendVerifyEmail;
