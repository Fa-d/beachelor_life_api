module.exports = app => {
  const { loginCheck } = require("../controllers/login.controller.js");
  const { registerUser } = require("../controllers/login.controller.js");
  // Create a new Customer
  app.post("/checkLogin", loginCheck);

  app.post("/registerUser", registerUser);

};
