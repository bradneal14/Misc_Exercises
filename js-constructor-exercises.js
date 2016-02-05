function Cat(name, owner){
  this.name = name;
  this.owner = owner;


}

Cat.prototype.cuteStatement = function() {
  return this.owner + " loves " + this.name;
};

var cat1 = new Cat("kitten", "Owner");
console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return "Everyone loves " + this.name;
};

console.log(cat1.cuteStatement());

var cat2 = new Cat("kitten2", "Owner2");
console.log(cat2.cuteStatement());

Cat.prototype.meow = function() {
  return "Meow!";
};

console.log(cat2.meow());

cat1.meow = function() {
  return "Meow!!!";
};

console.log(cat1.meow());
