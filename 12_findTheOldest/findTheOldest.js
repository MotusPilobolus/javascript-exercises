const findTheOldest = function(peopleList) {

    for (people of peopleList) { 
       if ( people.hasOwnProperty('yearOfDeath') === false ) { 
           people["yearOfDeath"] = new Date().getFullYear() 
        }
       var age = people.yearOfDeath - people.yearOfBirth; 
       people["personAge"] = age;
    }

    var sortedPeopleList = peopleList.sort((a, b) => b.personAge-a.personAge);
    return sortedPeopleList.shift();
};

// Do not edit below this line
module.exports = findTheOldest;
