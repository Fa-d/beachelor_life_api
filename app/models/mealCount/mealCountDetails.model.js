const sql = require("../../config/db.js");
const moment = require('moment');
const responsBodyFormatter = require("../../helpers/utilities.js")
let datetimeFormat = moment().format('YYYY-MM-DD HH:mm:ss');

class MealCountDetailsModel {
    constructor() { }
    static getAllUsersMealCount(result) {
        sql.query(`SELECT user.userId, userName,lunchCount,dinnerCount, dateOfThatDay, isUpdatedToday FROM meal left join user on user.userId = meal.userId`, (err, res) => {
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

    static getAllUsersTotalMealCountFunc(result) {
        sql.query(`SELECT sum(dinnerCount) + sum (lunchCount) as totalMeal from meal`, (err, res) => {
            if (err) { result(err, null); return; }
            const data = responsBodyFormatter(res, err);
            result(null, data);
        });
    }

    static gettestFunc1(result) {
        const queriesList = {
            q1: `DROP TEMPORARY TABLE IF EXISTS UserIds;`,
            q2: `CREATE TEMPORARY TABLE UserIds (rowNum INT, userId INT); `,
            q3: `INSERT INTO UserIds(rowNum, userId) SELECT ROW_NUMBER() over (order by userId asc) rowNum, userId from user;`,
            q4: `SELECT * FROM UserIds;`
        }
        sql.getConnection(function (err, connection) {
            if (err) {return cb(err);}
            connection.query(queriesList.q1, (err, res) => {
                if (err) { result(err, null); connection.release(); return; }
                connection.query(queriesList.q2, (err, res) => {
                    if (err) { result(err, null); connection.release(); return; }
                    connection.query(queriesList.q3, (err, res) => {
                        if (err) { result(err, null); connection.release(); return; }
                        connection.query(queriesList.q4, (err, res) => {
                            //loop through all day of the month
                            var fromDate = new Date("02-Dec-2021");
                            var toDate = new Date("01-Jan-2022");
                            for (var day = fromDate; day <= toDate; day.setDate(day.getDate() + 1)) {
                                //loop through all users
                                for (let userNo = 0; userNo < res.length; userNo++) {
                                    connection.query(`INSERT INTO meal (userId, lunchCount, dinnerCount, dateOfThatDay) VALUES (${res[userNo].userId}, 0, 0, "${day.toISOString().slice(0, 19).replace('T', ' ')}");`, (err, res) => {
                                        if (err) { result(err, null); connection.release(); return; }
                                    });
                                }
                            }
                            connection.query(`SELECT * FROM meal`, (err, res) => {
                                if (err) { result(err, null); connection.release(); return; }
                                connection.release();
                                const data = responsBodyFormatter(res, err);
                                result(null, data);
                            });
                        })
                    });
                });

            });
        });
    }
}

module.exports = MealCountDetailsModel

