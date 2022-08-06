function isLeapYear(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 4 == 0 && numbers[i] % 100 !== 0) || numbers[i] % 400 == 0) {
            console.log("number is leap year", numbers[i]);
        }
        else {
            console.log("number is not leap year", numbers[i]);
        }
    }
}


const leapYearArray = [2023, 2024, 2025, 2028, 2030];

isLeapYear(leapYearArray);