const User = require("../../models/user");

const { HttpError } = require("../../helpers");

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({
    verificationToken,
  }).exec();

  if (user === null) {
    throw HttpError(401, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.status(200).send({ message: "Verification successful" });
};

module.exports = verify;
