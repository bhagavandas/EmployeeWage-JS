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
while ( totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calDaliyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays, calDaliyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays,empHrs );
}

function calDaliyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
}

function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
}
//console.log("UC 7A - Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
//console.log(empDailyWageMap);

//UC9 Array Functions
const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
} 
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Total Hrs: " + totalHours + " Total Salary: " + totalSalary);
//console.log("Hrs: " + totalHours);
//console.log(totalSalary);
let nonWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
let partTimeWorkingDays = new Array();
empDailyHrsMap.forEach((value, key) => {
        if(value == 8){
                fullTimeWorkingDays.push(key);
        }
        else if(value == 4){
                partTimeWorkingDays.push(key);
        }else nonWorkingDays.push(key);
});
console.log("Full Working Days: " + fullTimeWorkingDays);
console.log("Part Working Days: " + partTimeWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);
