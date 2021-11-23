const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../../utilities.js")


class LogInRegister {
    constructor() { }
    static Login(loginModel, result) {
        sql.query(`select * from users where userName = "${loginModel.user_name}" AND password= "${loginModel.password}"`, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static Registration(registrationModel, result) {
        sql.query(`insert into users (user_name,mobile ,email,password) values ("${registrationModel.user_name}", "${registrationModel.mobile}", "${registrationModel.email}", "${registrationModel.password}")`,(err, res) => {
                if (err) {
                    result(err, null);
                    return;
                }
                const data = responsBodyFormatter(res, err);
                result(null, data);
            });
    }
    static CheckIfUserAlreadyExists(registrationMode, result) {
        sql.query(`SELECT * FROM users where email = "${registrationMode.email}"`, (err, res) => {
            if (err) {
                result(err);
                return;
            }
            const data = responsBodyFormatter(res, err);
            result(Object.keys(data.model).length);
        });
    }
}
module.exports = LogInRegister;
