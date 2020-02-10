function findMatching(driverArray, driverString){
  let drivers = driverArray.filter(match => match.toLowerCase() === driverString.toLowerCase())
  return drivers
};

function fuzzyMatch(driverArray, driverString){
  let driver = driverArray.filter(match => match.startsWith(driverString))
  return driver 
};

function matchName(driverArray, driverString){
  let driver = driverArray.filter(match => match.name === driverString)
  return driver 
};