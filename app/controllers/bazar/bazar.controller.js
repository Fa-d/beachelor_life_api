const BazarModel = require("../../models/bazar/bazar.model.js");


exports.GETAllBazar = (req, res) => {
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }

    BazarModel.BazarGetAllFunc((err, data) => {
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

exports.INSERTBazarCostUserWise= (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    const bazarModel = {
        userId: req.body.userId,
        cost: req.body.cost,
        date: req.body.date
    };
    BazarModel.InsertBazarCostUserWiseFunc(bazarModel, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);
    });
}


exports.UPDATESpecificUserBazarCost = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    const bazarModel = {
        bazarCost: req.body.bazarCost,
        userId: req.body.userId,
        dateOfMeal: req.body.dateOfMeal
    };
    BazarModel.UpdateBazarCostUserWiseFunc(bazarModel, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);
    });
}


exports.GETSpecificUserBazarCost = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    const bazarModel = {
        userId: req.body.userId
    };
    BazarModel.GetBazarCostUserWiseFunc(bazarModel, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);

    });

}


exports.GETSpecificUsersBazarCostSum = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    const bazarModel = {
        userId: req.body.userId
    };
    BazarModel.GETSpecificUsersBazarCostSumFunc(bazarModel, (err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);

    });
}


exports.GETIndividualUsersTotalBazarCost = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
   
    BazarModel.GETIndividualUsersTotalBazarCostFunc((err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);

    });
}

exports.GETAllUsersTotalBazarCostAndCount = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
   
    BazarModel.GETAllUsersTotalBazarCostAndCountFunc((err, data) => {

        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);

    });
}

exports.bazarDateInitialize = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
   
    BazarModel.bazarDateInitializeFunc((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Failed",
                didError: true,
                errorMessage: "Some error occured during login progress",
                model: []
            })
        } else res.send(data);

    });
}
