const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const {
  verifySchema,
  registerSchema,
  loginSchema,
} = require("../../schemas/user");

const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscriptionStatus,
  updateAvatars,
  verify,
  resendVerifyEmail,
} = require("../../controllers/users");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/", authenticate, updateSubscriptionStatus);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatars);

router.get("/verify/:verificationToken", verify);

router.post("/verify", validateBody(verifySchema), resendVerifyEmail);

module.exports = router;
