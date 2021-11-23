
module.exports = app => {
    const { GETAllUsersMealCount } = require("../../controllers/mealCount/mealCountDetails.controller.js");
    app.get("/getAllUsersMealCount", GETAllUsersMealCount);
};

