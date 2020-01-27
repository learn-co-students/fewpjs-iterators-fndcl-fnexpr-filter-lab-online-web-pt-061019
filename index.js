// Code your solution here

function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
};

function fuzzyMatch(drivers, letter){
    return drivers.filter(driver => driver.toLowerCase().startsWith(letter.toLowerCase()))
};

function matchName(drivers, sName){
    return drivers.filter(driver => driver.name.toLowerCase() === sName.toLowerCase())
};
