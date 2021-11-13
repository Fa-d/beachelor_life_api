const Login = require("../models/login.model.js");

exports.loginCheck = (req, res)=>{
    if (!req.body) {
        req.status(400).send({
            message: "Content cannot be empty!"
        });
    }
    //Step: 2 Create The database model
   const loginModel = {
        user_name: req.body.user_name,
        password: req.body.password
    };

    //Step: 3 Check if the user exists
    Login(loginModel, (err, data) => {
        
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured during login progress"
            })
        } else res.send(data);
    });
};



