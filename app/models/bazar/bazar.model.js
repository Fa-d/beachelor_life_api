const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")



class BazarModel {
    constructor() { }
    static BazarGetAllFunc(result) {
        sql.query(`SELECT * FROM users JOIN master_meal on pkUid = master_meal.fkUid; `, (err, res) => {
            if (err) {result(err, null);return;}
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static UpdateBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`UPDATE master_meal SET bazarCost = ${bazarCostModel.bazarCost} WHERE fkUid = ${bazarCostModel.userId} AND dateOfMeal = '${bazarCostModel.dateOfMeal}';`, (err, res) => {
            if (err) {result(err, null);return;}
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }   
    static GetBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`SELECT * FROM users JOIN master_meal on pkUid = master_meal.fkUid WHERE pkUid = '${bazarCostModel.userId}';`, (err, res) => {
            if (err) {result(err, null);return;}
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
}

module.exports = BazarModel;
