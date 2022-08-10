function isLeapYear(year){
    if(year % 4 == 0){
        if (year % 400 == 0){
            return true;
        }
        else if (year % 100 == 0){
            return false;
        }
        return true;
    }
    
    else{
        return false;
    }
    
}

const myYear = 2000;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year: ', isMyYearLeapYear);

const herYear = 2145;
const isHerYearLeapYear = isLeapYear(herYear);
console.log('is her year leap year: ', isHerYearLeapYear);

