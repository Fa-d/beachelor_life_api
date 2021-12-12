module.exports = app => {
    const { GETAllBazar, UPDATESpecificUserBazarCost, GETSpecificUserBazarCost, INSERTBazarCostUserWise, GETSpecificUsersBazarCostSum,
        GETIndividualUsersTotalBazarCost, GETAllUsersTotalBazarCostAndCount, bazarDateInitialize
    } = require("../../controllers/bazar/bazar.controller.js");
    app.get("/getAllBazarCostForAllUsers", GETAllBazar);
    app.post("/updateBazarOfSpecificUser", UPDATESpecificUserBazarCost);
    app.post("/getSpecificUserBazarCost", GETSpecificUserBazarCost);
    app.post("/insertBazarUserWise", INSERTBazarCostUserWise);
    app.post("/getSpecificUsersTotalBazarCost", GETSpecificUsersBazarCostSum);
    app.get("/getIndividualUsersTotalBazarCost", GETIndividualUsersTotalBazarCost);
    app.get("/getAllUsersTotalBazarCostAndCount", GETAllUsersTotalBazarCostAndCount);
    app.get("/bazarDateInitialize", bazarDateInitialize);
};
