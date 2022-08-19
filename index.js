// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari','Mo']

const returnFirstTwoDrivers = ((anyArray) => anyArray.slice(0,2))

const returnLastTwoDrivers = ((anyArray) => anyArray.slice(anyArray.length-2))

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

let multiplier = [5,2,3]

const createFareMultiplier = (multiplier) => (fare =5) => fare*multiplier

const fareDoubler = (fare) => createFareMultiplier(fare)(2)

const fareTripler = (fare) => createFareMultiplier(fare)(3)

function selectDifferentDrivers(drivers, callbackFunction) {
    return callbackFunction(drivers)
}