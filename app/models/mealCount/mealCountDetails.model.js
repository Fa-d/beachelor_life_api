const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../../utilities.js")

class MealCountDetailsModel {
    constructor() { }
    static getAllUsersMealCount(result) {
        sql.query(`SELECT * FROM per_day_meal_count_per_user;`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static getUserWiseMealCount() {
        sql.query(``, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static updateUserWiseMealCount() {
        sql.query(``, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
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




