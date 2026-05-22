const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldPerson, currPerson) => {
    const oldAge = getAge(oldPerson.yearOfBirth, oldPerson.yearOfDeath);
    const currAge = getAge(
      currPerson.yearOfBirth,
      currPerson.yearOfDeath,
    );
    return oldAge < currAge ? currPerson : oldPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
