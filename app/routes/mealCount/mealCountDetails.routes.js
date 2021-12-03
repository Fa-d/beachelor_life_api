
module.exports = app => {
    const { GETAllUsersMealCount,
        GETUserWiseMealCount,
        UPDATEUserWiseMealCount },
        getAllUsersTotalMealCount = require("../../controllers/mealCount/mealCountDetails.controller.js");
    app.get("/getAllUsersMealCount", GETAllUsersMealCount);
    app.post("/getUserWiseMealCount", GETUserWiseMealCount);
    app.post("/updateUserWiseMealCount", UPDATEUserWiseMealCount);
    app.post("/getAllUsersTotalMealCount", getAllUsersTotalMealCount);
};

