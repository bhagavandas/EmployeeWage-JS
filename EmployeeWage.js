console.log("Welcome to Employee Wage Problem!");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array(); 
let totalEmpWage = 0;
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();

function getWorkingHours(empCheck){
switch(empCheck) {
        case IS_PART_TIME : 
                return PART_TIME_HOURS;
        case IS_FULL_TIME :
                return FULL_TIME_HOURS;
        default :
                return 0;
}
}
function calDaliyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
}

//function totalWages(totalWage, dailyWage){
       // return totalWage + dailyWage;
//}

while ( totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
       //UC 10 Object Creation
        empDailyHrsAndWageArr.push(
        {
        dayNum : totalWorkingDays,
        dailyHours : empHrs,
        dailyWages : calDaliyWage(empHrs),
        toString(){
                return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + '  And Wage Earned = ' + this.dailyWages
        },
        });

}
        console.log("UC 10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);


//UC11 Object Functions along with Arrow Functions
let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWages > 0).reduce((totalWages, dailyHrsAndWage) => totalWages += dailyHrsAndWage.dailyWages, 0);
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWages > 0).reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyWages, 0);
        console.log("UC 11A Total Hours: " + totalHours + "  Total Wages: " + totalWages);

        process.stdout.write("UC 11B Logging Full Work Days")
        empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                        .forEach(dailyHrsAndWage => ProcessingInstruction.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                        .map(dailyHrsAndWage => dailyHrsAndWage.toString());
        console.log("\nUC 11C PartWorkingDayStrings: " + partWorkingDayStrArr);


 let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
        console.log("\nUC 11D NonWorkingDayNums: " + nonWorkingDayNums);
