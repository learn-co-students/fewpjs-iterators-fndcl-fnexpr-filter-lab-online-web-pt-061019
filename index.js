function findMatching(driversArray, driverString){
    let newDrivers = driversArray.filter(match => match.toLowerCase() === driverString.toLowerCase())
    return newDrivers
}

function fuzzyMatch(driversArray, letterString){
    let matches = driversArray.filter(match => match.startsWith(letterString))
    debugger
    return matches
}

function matchName(driversArray, nameString){
    let nameMatches = driversArray.filter(nameMatches => nameMatches.name === nameString)
    return nameMatches
}