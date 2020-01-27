// Code your solution here
function findMatching (drivers, str) {
  let match = drivers.filter(m => 
     m.toLowerCase() === str.toLowerCase()
  );
  return match
}

function fuzzyMatch(drivers, str) {
  let match = drivers.filter(m => {
    return m[0].toLowerCase() === str[0].toLowerCase();
  });
  return match
}

function matchName(drivers, str) {
  let match = drivers.filter(m => 
    m.name === str
  );
  return match
}