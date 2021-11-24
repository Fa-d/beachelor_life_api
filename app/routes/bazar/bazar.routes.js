module.exports = app => {
    const { GETAllBazar, UPDATESpecificUserBazarCost, GETSpecificUserBazarCost } = require("../../controllers/bazar/bazar.controller.js");
    app.get("/getAllBazarCostForAllUsers", GETAllBazar);
    app.post("/updateBazarOfSpecificUser", UPDATESpecificUserBazarCost);
    app.post("/getSpecificUserBazarCost", GETSpecificUserBazarCost);
};
