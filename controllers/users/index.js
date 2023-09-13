const { ctrlWrapper } = require("../../helpers");
const verify = require("./verify");
const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscriptionStatus = require("./updateSubscriptionStatus");
const updateAvatars = require("./updateAvatars");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscriptionStatus: ctrlWrapper(updateSubscriptionStatus),
  updateAvatars: ctrlWrapper(updateAvatars),
  verify: ctrlWrapper(verify),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
