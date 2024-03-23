// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    let twoDrivers = drivers.slice(0,2)
    return twoDrivers
}

function returnLastTwoDrivers(){
    let lastDrivers = drivers.slice(-2)
    return lastDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(){
        return num*num
    }
}

// function fareDoubler(num){
//     return num*2
// }

const fareDoubler = num2=>num2*2

const fareTripler = num3=>num3*3

function selectDifferentDrivers(drivers, func){
   let selecteddrivers = [...drivers ,...func]

   return func(selecteddrivers)
}

