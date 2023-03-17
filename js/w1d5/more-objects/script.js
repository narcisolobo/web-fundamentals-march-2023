// Object Literal Notation

var bmxBike = {
  brand: 'P.K. Ripper',
  color: 'chrome',
  wheelSize: 20,
  wipeOut: function () {
    console.log('OUCH!');
  },
  printStats: function () {
    console.log(this.brand, this.color, this.wheelSize);
  }
};

var myColor = 'color';

// two syntaxes to get and set values in an object:
// Dot Notation || Bracket Notation

// getting a value with dot notation
console.log(bmxBike.color);
// getting a value with bracket notation
// remember quotes around key names
console.log(bmxBike['color']);

// setting a value with dot notation
bmxBike.color = 'black';
console.log(bmxBike);

// setting a value with bracket notation
bmxBike['color'] = 'red';
console.log(bmxBike);

// calling a method using dot notation
bmxBike.wipeOut();

// HEADS UP! NEW KEYWORD
// the 'this' keyword

console.log(this);

var title = document.querySelector('h1');
title.innerText = 'THE DOM HAS BEEN CHANGED';
title.style.backgroundColor = 'blue';