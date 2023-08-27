const { ctrlWrapper } = require("../../helpers");
const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscriptionStatus = require("./updateSubscriptionStatus");
const updateAvatars = require("./updateAvatars");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscriptionStatus: ctrlWrapper(updateSubscriptionStatus),
  updateAvatars: ctrlWrapper(updateAvatars),
};
