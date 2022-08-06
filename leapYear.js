/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */



function isLeapYear(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] % 4 == 0 && numbers[i] % 100 !== 0) || numbers[i] % 400 == 0) {
            console.log("Year is leap year", numbers[i]);
        }
        else {
            console.log("Year is not leap year", numbers[i]);
        }
    }
}


const leapYearArray = [2023, 2024, 2025, 2028, 2030];

isLeapYear(leapYearArray);