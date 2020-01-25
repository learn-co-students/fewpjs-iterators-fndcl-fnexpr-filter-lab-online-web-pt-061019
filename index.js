function findMatching(drivers, stringName) {
    return drivers.filter(driver => driver.toLowerCase() === stringName.toLowerCase())
};

function fuzzyMatch(drivers, startLetter) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(startLetter.toLowerCase()))
};

//inside a hash: object that has a property of name
function matchName(drivers, stringName) {
    return drivers.filter(driver => driver.name.toLowerCase() === stringName.toLowerCase())
};
