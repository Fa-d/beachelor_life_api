
const sql = require("../../config/db.js");

class AutoInsertMealDate {
constructor(){}
    static getUniqueUsers(result){
        sql.query('SELECT pkUid FROM `bechbi9mwbngaqfbhvxi`.`users`;', (err, res)=>{
            if (err) { result(err, null); return; }
            const data = res;
            result(null, data);
        })
    }
    static getUsersAllInfo(data, result){
        sql.query(`SELECT * FROM users WHERE pkUid = ${data};`, (err, res)=>{
            if (err) { result(err, null); return; }
            const data = res;
            result(null, data);
        })
    }
    static insertNewDate(data, result){
        sql.query(`SINSERT INTO master_meal (dateOfMeal, fkUid, mealCount, bazarCost) VALUES ("${data.date}",${data.userId},0,0)`, (err, res)=>{
            if (err) { result(err, null); return; }
            const data = res;
            result(null, data);
        })
    }

}

module.exports = AutoInsertMealDate
