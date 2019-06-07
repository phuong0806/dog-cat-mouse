var chalk = require("chalk");

function Dog(name) {
  this.stomach = [];
  this.name = name;
  console.log('dog');
}

Dog.prototype.eat = function(cat) {
  this.stomach.push(cat);
}

Dog.prototype.sayHi = function() {
  console.log('Hi i am a dog, my name is ' + chalk.blue(this.name));
}

module.exports = Dog;