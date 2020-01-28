// Code your solution here

function findMatching(drivers, string) {
  let matches = drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase();

  })
  return matches
};

    // // if (driver.toLowerCase === string.toLowerCase) {
    // //   return driver;
    // // }
    // let driverLower = driver.toLowerCase;
    // let stringLower = string.toLowerCase;
    // if (driverLower === stringLower) {
    //   return driver
    // }
    // // return driver.toLowerCase === string.toLowerCase;

      // })
  // return matches


  function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(function(driver) {
      return driver[0] === string[0]
    })
    return matches;
  };

  function matchName(drivers, string) {
    let matches = drivers.filter(function(driver) {
      return driver.name === string;
    })
    return matches;
  };
