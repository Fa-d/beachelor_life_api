const MealCount = require("../../models/mealCount/mealCount.model.js");

exports.mealCountAll = (req, res) => {
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    MealCount.MealCountFunc((err, data) => {
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

exports.updateMealCount = (req, res) => {
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    const mealCountModel = {
        meal_count: req.body.meal_count,
        user_id: req.body.user_id
    }
    
    MealCount.UpdateMealCountFunc(mealCountModel, (err, data) => {
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

