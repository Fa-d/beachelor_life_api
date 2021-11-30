const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")

class MealCountDetailsModel {
    constructor() { }
    static getAllUsersMealCount(result) {
        sql.query(`select * from meal;`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static getUserWiseMealCount(UserModel, result) {
        sql.query(`select * from meal where userId = ${UserModel.userID};`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static updateUserWiseMealCount(UserModel, result) {
        if (UserModel.isDinner) {
            sql.query(`update meal set dinnerCount = ${UserModel.count} where userId = ${UserModel.userId} AND dateOfThatDay = "${UserModel.date}";`, (err, res) => {
                if (err) { result(err, null); return; }
                const data = responsBodyFormatter(res, err);
                result(null, data);
            });
        } else {
            sql.query(`update meal set lunchCount = ${UserModel.count} where userId = ${UserModel.userId} AND dateOfThatDay = "${UserModel.date}";`, (err, res) => {
                if (err) { result(err, null); return; }
                const data = responsBodyFormatter(res, err);
                result(null, data);
            });
        }
    }

}

module.exports = MealCountDetailsModel

