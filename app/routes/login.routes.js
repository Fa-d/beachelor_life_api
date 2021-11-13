module.exports = app => {
    const {loginCheck} = require("../controllers/login.controller.js");
  
    // Create a new Customer
    app.post("/checkLogin", loginCheck);
  
  };
  