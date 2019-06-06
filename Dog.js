var chalk = require("chalk");

function Dog(name) {
  this.name = name;
  console.log('dog');
}

Dog.prototype.sayHi = function() {
  console.log('Hi i am a dog, my name is ' + chalk.blue(this.name));
}

module.exports = Dog;