
module.exports = app => {
    const { GETAllUsersMealCount,
        GETUserWiseMealCount,
        UPDATEUserWiseMealCount } = require("../../controllers/mealCount/mealCountDetails.controller.js");
    app.get("/getAllUsersMealCount", GETAllUsersMealCount);
    app.post("/getUserWiseMealCount", GETUserWiseMealCount);
    app.post("/updateUserWiseMealCount+", UPDATEUserWiseMealCount);
};

