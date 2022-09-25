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
        
}

function calDaliyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
}
//Array Helper Function
function sum(dailyWage){
        totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);

function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
}
console.log("UC7 - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//Array Map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC7C - Show Days when Fulltime Wage of 160 Earned
function fullTimeWage(dailyWage){
        return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C -Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurence when full time wage was earned using find function
function findFullTimeWage(dailyWage){
        return dailyWage.includes("160");
}
console.log("UC7D -First time Fulltime wage was earned an Day: "+ mapDayWithWageArr.find(findFullTimeWage));

// UC 7E = Check if every element of Full Time Wage is truly holding full time wage
function isAllFullTimeWage(dailyWage){
        return dailyWage.includes("160");
}
console.log("UC 7E - Check All element have full time wage: " + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F - Check if there is any Part time wage
function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80");
}
console.log("UC 7F - Check is there any part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee worked
function totalDaysWorked(numOfDays, dailyWage){
        if(dailyWage > 0)
        return numOfDays+1;
        return numOfDays;
}
console.log("UC 7G - Number of Days Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));

