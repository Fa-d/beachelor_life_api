const LogInRegister = require("../../models/login_signup/loginSignUp.model.js");


exports.loginCheck = (req, res) => {
    if (!req.body) {
        req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    //Step: 2 Create The database model
    const loginModel = {
        user_name: req.body.user_name,
        password: req.body.password
    };
    //Step: 3 Check if the user exists
    LogInRegister.Login(loginModel, (err, data) => {
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


exports.registerUser = (req, res) => {
    if (!req.body) {
        return req.status(400).send({
            message: "Failed",
            didError: true,
            errorMessage: "Failed to validate request body",
            model: []
        });
    }
    const registration = {
        user_name: req.body.user_name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    };
    LogInRegister.CheckIfUserAlreadyExists(registration, (numberOfResponses) => {
        if (!req.body) {
            req.status(400).send({
                message: "Failed",
                didError: true,
                errorMessage: "Failed to validate request body",
                model: []
            });
        } else {
            if (numberOfResponses > 0) {
                res.status(500).send({
                    message: numberOfResponses.message || "Failed",
                    didError: true,
                    errorMessage: "User alreadyy Exists",
                    model: []
                });
            } else {
                LogInRegister.Registration(registration, (erra, dataa) => {
                    if (erra) {
                        res.status(500).send({
                            message: erra.message || "Failed",
                            didError: true,
                            errorMessage: "Some error occured during login progress",
                            model: []
                        })
                    } else res.send(dataa);
                });
            }
        }
    });
}



