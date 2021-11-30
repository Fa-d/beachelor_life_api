module.exports = app => {
    const { GETAllBazar, UPDATESpecificUserBazarCost, GETSpecificUserBazarCost, INSERTBazarCostUserWise } = require("../../controllers/bazar/bazar.controller.js");
    app.get("/getAllBazarCostForAllUsers", GETAllBazar);
    app.post("/updateBazarOfSpecificUser", UPDATESpecificUserBazarCost);
    app.post("/getSpecificUserBazarCost", GETSpecificUserBazarCost);
    app.post("/insertBazarUserWise", INSERTBazarCostUserWise);
};
