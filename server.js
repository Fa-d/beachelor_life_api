const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bachelors Meal application." });
});

require("./app/routes/login_signup/login.routes.js")(app);
require("./app/routes/mealCount/mealCount.routes.js")(app);
require("./app/routes/mealCount/mealCountDetails.routes.js")(app);
require("./app/routes/bazar/bazar.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const { CallAutoInsertMealCount } = require("./app/services/autoInsertMealDate.service.js");
CallAutoInsertMealCount().start()
