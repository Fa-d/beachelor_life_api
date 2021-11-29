const AutoInsertMealDate = require("../models/mealCount/autoInsertMealDate.model.js");
const cron = require('node-cron');
const cron2 = require('node-cron');


exports.CallAutoInsertMealCount = () =>

    cron.schedule("*/60 * 1 * * *", () => {
        var theData =  AutoInsertMealDate.getUniqueUsers((err, data) => {
            if (err) {
                console.log("Some Error occured")
            } else {
                data.forEach(element => {
                    AutoInsertMealDate.getUsersAllInfo(element['pkUid'], (err, data) => {
                        if (err) {
                            console.log()
                        } else{
                            console.log(data)
                        }
                    })
                });
            }
        });
    }, {
        scheduled: true,
        timezone: "Asia/Dhaka"
    });
