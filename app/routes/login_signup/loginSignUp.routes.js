module.exports = app => {
  const { loginCheck } = require("../../controllers/login_signup/loginSignUp.controller.js");
  const { registerUser } = require("../../controllers/login_signup/loginSignUp.controller.js");
  // Create a new Customer
  app.post("/checkLogin", loginCheck);

  app.post("/registerUser", registerUser);

};
