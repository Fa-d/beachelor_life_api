const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")



class BazarModel {
    constructor() { }
    static BazarGetAllFunc(result) {
        sql.query(`select * from bazar; `, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static UpdateBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`update bazar set bazarCost = ${bazarCostModel.bazarCost} where userId  = ${bazarCostModel.userId} AND dateOfThatDay = "${bazarCostModel.dateOfMeal}";`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static GetBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`select * from bazar where userid ='${bazarCostModel.userId}';`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static InsertBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`insert into bazar(userId, bazarCost, dateOfThatDay) VALUES (${bazarCostModel.userId},${bazarCostModel.cost}, "${bazarCostModel.date}") ;`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
}

module.exports = BazarModel;
