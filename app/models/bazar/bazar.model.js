const sql = require("../../config/db.js");
const responsBodyFormatter = require("../../helpers/utilities.js")



class BazarModel {
    constructor() { }
    static BazarGetAllFunc(result) {
        sql.query(`select user.userId, userName, bazarCost, dateOfThatDay from user join bazar on bazar.userId = user.userId`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static UpdateBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`update bazar set bazarCost = ${bazarCostModel.bazarCost} , userId = ${bazarCostModel.userId} where dateOfThatDay = "${bazarCostModel.dateOfMeal}";`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static GetBazarCostUserWiseFunc(bazarCostModel, result) {
        sql.query(`select user.userId, userName, bazarCost, dateOfThatDay from user join bazar on bazar.userId = user.userId where user.userId = ${bazarCostModel.userId};`, (err, res) => {
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
    static GETSpecificUsersBazarCostSumFunc(bazarCostModel, result) {
        sql.query(`select  user.userId, userName, sum(bazarCost) as totalCost from user join bazar on bazar.userId = user.userId where user.userId = ${bazarCostModel.userId} ;`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static GETIndividualUsersTotalBazarCostFunc(result) {
        sql.query(`select user.userId, userName, sum(bazarCost) as totalCost, count(bazar.userId) as bazarCount from bazar join user on bazar.userId = user.userId  group by user.userId`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static GETAllUsersTotalBazarCostAndCountFunc(result) {
        sql.query(`select sum(bazarCost) as totalCost, count(bazar.userId) as bazarCount from bazar join user on bazar.userId = user.userId;`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }
    static bazarDateInitializeFunc(result) {
        sql.getConnection(function (err, connection) {
            if (err) { return cb(err); }
            //loop through all day of the month
            var fromDate = new Date("03-Dec-2021");
            var toDate = new Date("02-Jan-2022");
            for (var day = fromDate; day <= toDate; day.setDate(day.getDate() + 1)) {
                connection.query(`INSERT INTO bazar (dateOfThatDay) VALUES("${day.toISOString().slice(0, 19).replace('T', ' ')}");`, (err, res) => {
                    if (err) { result(err, null); connection.release(); return; }
                });
            }
            connection.query(`SELECT * FROM bazar`, (err, res) => {
                if (err) { result(err, null); connection.release(); return; }
                connection.release();
                const data = responsBodyFormatter(res, err);
                result(null, data);
            });
        })
    }
}

module.exports = BazarModel;
