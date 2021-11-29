const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")

class MealCountDetailsModel {
    constructor() { }
    static getAllUsersMealCount(result) {
        sql.query(`SELECT * FROM per_day_meal_count_per_user;`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static getUserWiseMealCount(UserModel, result) {
        sql.query(`SELECT * FROM per_day_meal_count_per_user WHERE fkUid = ${UserModel.userID};`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static updateUserWiseMealCount(UserModel, result) {
        if (UserModel.isDinner) {
            sql.query(`UPDATE per_day_meal_count_per_user SET dinnerCount = ${UserModel.count} WHERE fkUid = ${UserModel.userID} AND dateOfMeal = '${UserModel.date}';`
            , (err, res) => {
                if (err) { result(err, null); return; }
                const data = responsBodyFormatter(res, err);
                result(null, data);
            });
        } else {
            sql.query(`UPDATE per_day_meal_count_per_user SET lunchCount = ${UserModel.count} WHERE fkUid = ${UserModel.userID} AND dateOfMeal = '${UserModel.date}';`
            , (err, res) => {
                if (err) { result(err, null); return; }
                const data = responsBodyFormatter(res, err);
                result(null, data);
            });
        }
    }
    static insertUserWiseMealCount() {
        sql.query(``, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
}

module.exports = MealCountDetailsModel




