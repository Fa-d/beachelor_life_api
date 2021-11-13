const sql = require("./db.js");
const responsBodyFormatter = require("../../utilities.js")
function Login(loginModel, result){
    sql.query(`select * from users where user_name = "${loginModel.user_name}" AND password= "${loginModel.password}"`, (err, res) => {
        const data = responsBodyFormatter(res, err);
        result(null, data);
    });
};

module.exports = Login;


