// Code your solution here

let findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() ===
    name. toUpperCase())
}

let fuzzyMatch = (drivers, letters) => {
    return drivers.filter(driver => driver.startsWith(letters))
}

let matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name.toLowerCase() ===
    name.toLowerCase())
}