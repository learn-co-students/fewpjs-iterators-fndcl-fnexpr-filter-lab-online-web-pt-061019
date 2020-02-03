// Code your solution here

function findMatching(driversArr, search) {
    let searchResult = driversArr.filter(driver => {
        return driver.toLowerCase() === search.toLowerCase()
    })
    return searchResult
}

function fuzzyMatch(driversArr, search) {
    let searchResult = driversArr.filter(driver => {
        let firstLetters = search.length
        return driver.substring(0, firstLetters) === search
    })
    return searchResult
}

function matchName(driversArr, search) {
    let searchResult = driversArr.filter(driver => {
        return driver.name === search
    })
    return searchResult
}