// var atticus = ["Atticus", "2405", "47000", 3];
// var jem = ["Jem", "62347", "63500", 4];
// var boo = ["Boo", "11435", "54000", 3];
// var scout = ["Scout", "6243", "74750", 5];
// var robert = ["Robert", "26835", "66000", 1];
// var mayella = ["Mayella", "89068", "35000", 2];


var people = [];

// object constructor
function Person(name, employeeNumber, annualSalary, reviewRating){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.annualSalary = annualSalary;
  this.reviewRating = reviewRating;
}

// object instances
var atticus = new Person ("Atticus", 2405, 47000, 3);
var jem = new Person ("Jem", 62347, 63500, 4);
var boo = new Person ("Boo", 11435, 54000, 3);
var scout = new Person ("Scout", 6243, 74750, 5);
var robert = new Person ("Robert", 26835, 66000, 1);
var mayella = new Person ("Mayella", 89068, 35000, 2);

// push object instances to locations array
people.push(atticus);
people.push(jem);
people.push(boo);
people.push(scout);
people.push(robert);
people.push(mayella);

var people = [atticus, jem, boo, scout, robert, mayella];  //Array of object created

function bonus(person) {
  var employeeBonus = {};

  employeeBonus.name = person.name;

  if(person.reviewRating <= 2){
    employeeBonus.bonusPercentage = 0;

  } else if(person.reviewRating == 3){
    employeeBonus.bonusPercentage = 0.04;

  } else if(person.reviewRating == 4){
    employeeBonus.bonusPercentage = 0.06;

  } else if(person.reviewRating == 5){
    employeeBonus.bonusPercentage = 0.10;
  }
  if (person.employeeNumber.length == 4) {
    employeeBonus.bonusPercentage += .05;
  }
  if (parseInt(person.annualSalary) > 65000) {
    employeeBonus.bonusPercentage -= .01;
  }
  if (employeeBonus.bonusPercentage > .13) {
      employeeBonus.bonusPercentage= .13;
  } else if (employeeBonus.bonusPercentage < 0) {
      employeeBonus.bonusPercentage = 0;
  }

  employeeBonus.totalCompensation = parseInt(person.annualSalary) * (1 + employeeBonus.bonusPercentage);

  employeeBonus.bonusAmount = Math.round(employeeBonus.totalCompensation-person.annualSalary);

  return employeeBonus;

}

for (var i = 0; i < people.length; i++) {
  console.log(bonus(people[i]));
}
