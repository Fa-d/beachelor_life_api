module.exports = app => {
    const { mealCountAll, updateMealCount } = require("../../controllers/mealCount/mealCount.controller.js");
    
    app.get("/mealCount", mealCountAll);
    app.post("/updatemealcount", updateMealCount);
  };

