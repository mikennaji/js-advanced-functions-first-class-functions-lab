// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return[drivers[0],drivers[1]]
}

const returnLastTwoDrivers = (drivers) => {
    const length = drivers.length - 1;
    return[drivers[length-1], drivers[length]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare * num
    }
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, whichdriver){
    return(whichdriver(arrayOfDrivers));
}