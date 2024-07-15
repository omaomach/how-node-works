// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
// const Calculator = require("./test-module-1");

// const calculator1 = new Calculator();
// const add = calculator1.add(2, 3);
// console.log(add);

// exports
// const calculator2 = require("./test-module-2");  // we are getting an object "calculator2" containing all the properties in the module
// console.log(calculator2.modulas(5, 2));
// console.log(calculator2.power(5, 3));

const { modulas, subtract, power } = require("./test-module-2"); // you also just import the one that you only need
console.log(subtract(4, 9));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
