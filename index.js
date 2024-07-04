// Define an array of drivers
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
    
}

// Testing the function
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); // Output: ['Antonia', 'Nuru']

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}


const driver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//create FareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, selectionFunction) {
    return selectionFunction(arrayOfDrivers);
}


