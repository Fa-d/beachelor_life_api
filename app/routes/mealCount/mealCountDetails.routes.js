
module.exports = app => {
    const { GETAllUsersMealCount,
        GETUserWiseMealCount,
        UPDATEUserWiseMealCount,getAllUsersTotalMealCount, gettest1 }
         = require("../../controllers/mealCount/mealCountDetails.controller.js");
    app.get("/getAllUsersMealCount", GETAllUsersMealCount);
    app.post("/getUserWiseMealCount", GETUserWiseMealCount);
    app.post("/updateUserWiseMealCount", UPDATEUserWiseMealCount);
    app.get("/getAllUsersTotalMealCount", getAllUsersTotalMealCount);
    app.get("/gettest", gettest1);

};

