const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")



class MealCount {
    constructor() { }
    static MealCountFunc(result) {
        sql.query(`SELECT * FROM users JOIN master_meal on pkUid = master_meal.fkUid; `, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static UpdateMealCountFunc(mealCountModel, result) {
        sql.query(`update master_meal SET mealCount = "${mealCountModel.meal_count}" where fkUid = "${mealCountModel.user_id}";`, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    //todo update bazar
}

module.exports = MealCount;