/* const myfunction2 = require('./function.js');
const myfunction1 = require ('./function.js');

myfunction1();
myfunction2();

 */


const myModule = require('./function.js');

console.log(myModule.foo);
myModule.myfunction1();
myModule.myfunction2();

