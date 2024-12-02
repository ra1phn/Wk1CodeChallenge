//Declaration of basic salary. The individual's salary before deductions.
let basicSalary;

//Function for PAYE deductions 
const payeDeductions = function (basicSalary) {
    if (basicSalary > 800000){
        return basicSalary * 0.35;
    } else if (basicSalary >= 500001 && basicSalary <= 800000) {
        return basicSalary * 0.325;
    } else if (basicSalary >= 32334 && basicSalary <= 500000) {
        return basicSalary * 0.325;
    } else if (basicSalary >= 24001 && basicSalary <= 32333) {
        return basicSalary * 0.325;
    } else if (basicSalary <= 24000) {
        return basicSalary * 0.1;
    } else return 'Input Basic Salary'
}

/*Function that calculates nhif deductions.
const nhifDeductions = function (basicSalary) {
    if (basicSalary >= 100000) {
        return 1700;
    } else if (basicSalary >= 90000 && basicSalary <= 99999) {
        return 1600;
    } else if (basicSalary >= 80000 && basicSalary <= 89999) {
        return 1500;
    } else if (basicSalary >= 70000 && basicSalary <= 79999) {
        return 1400;
    } else if (basicSalary >= 60000 && basicSalary <= 69999) {
        return 1300;
    } else if (basicSalary >= 50000 && basicSalary <= 59999) {
        return 1200;
    } else if (basicSalary >= 45000 && basicSalary <= 49999) {
        return 1100;
    } else if (basicSalary >= 40000 && basicSalary <= 44999) {
        return 1000;
    } else if (basicSalary >= 35000 && basicSalary <= 39999) {
        return 950;
    } else if (basicSalary >= 30000 && basicSalary <= 34999) {
        return 900;
    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
        return 850;
    } else if (basicSalary >= 20000 && basicSalary <= 24999) {
        return 750;
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
        return 600;
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
        return 500;
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
        return 400;
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
        return 300;
    } else if (basicSalary <= 5999) {
        return 150;
    } else return 'Input Salary!'
} */

//Function to calculate SHIF
const shifDeductions = basicSalary * 0.0275;


//Function to calculate NSSF
const nssfDeductionsTier1 = function (basicSalary){
   if (basicSalary <= 7000) {
    return basicSalary * 0.06;
   } 
}
const nssfDeductionsTier2 = function (basicSalary) {
    if (basicSalary>= 7001 && basicSalary <= 36000) {
        return basicSalary * 0.06;
    }
}