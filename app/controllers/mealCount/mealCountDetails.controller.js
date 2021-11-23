const MealCountDetailsModel = require("../../models/mealCount/mealCountDetails.model.js");


exports.GETAllUsersMealCount = (req, res)=>{
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    MealCountDetailsModel.getAllUsersMealCount((err, data) => {
        if (err) {
            res.status(500).send({
                message: "Failed",
                didError: true,
                errorMessage: "Some internal error occured",
                model: []
            })
        } else res.send(data);
    });
};
exports.GETUserWiseMealCount = (req, res)=>{
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
};
exports.UPDATEUserWiseMealCount = (req, res)=>{
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
};
exports.INSERTUserWiseMealCount = (req, res)=>{
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
};



