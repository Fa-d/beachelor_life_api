const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")


class LogInRegister {
    constructor() { }
    static Login(loginModel, result) {
        sql.query(`select count(userId) from user where (userMobile = "${loginModel.user_name}" OR userEmail = "${loginModel.user_name}") AND userPassword = "${loginModel.password}"`, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static Registration(registrationModel, result) {
        sql.query(`insert INTO user(userName, userMobile, userEmail, userPassword) values ("${registrationModel.user_name}", "${registrationModel.mobile}", "${registrationModel.email}", "${registrationModel.password}");
        SELECT LAST_INSERT_ID() as userId;`, (err, res) => {
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


