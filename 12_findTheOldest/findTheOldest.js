const findTheOldest = function(array) {
  return array.reduce((oldest, current) => {
    let currentPerson = getAge(current.yearOfBirth, current.yearOfDeath);
    let oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    if (currentPerson > oldestPerson) return current;
    return oldest;
  });

};

function getAge(birth, death) {
  if (!death) {
    death = (new Date()).getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
