
function setFullName(newName) {
  this.fullName = newName;
}

let person = {
  firstName: "Nicolas",
  lastName: "Brown"
};

let setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName)
