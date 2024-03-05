/* const EventEmitter = require('events')
const myEmmitter = new EventEmitter();
const welcomeUser = () => {
    console.log('Welcome User!');
}

myEmmitter.on('userJoined', welcomeUser);
myEmmitter.emit('userJoined'); */

//multiple use of .on()
/* const EventEmmitter =require('events')
const myEmmitter = new EventEmmitter();
const sayHello =()=>{
    console.log('hellow user');
}

const sayHi = ()=> {
    console.log('hi User');
}

const newYear =()=> {
    console.log('Happy new Year');
}

myEmmitter.on('userJoined',sayHello);
myEmmitter.on('userJoined', sayHi);
myEmmitter.on('userJoined',newYear);

myEmmitter.emit('userJoined');
 */


//with function
/* const EventEmitter = require('events');

const myEmitter = new EventEmitter();


const greetBirthday =(name, newAge)=>{
    
    console.log('Happy Birthday ' +name+' you are now: ' +newAge+' years old');
}
myEmitter.on('Birthday Event', greetBirthday);
myEmitter.emit('Birthday Event', 'Bogart', '46'); */

/* const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener Function 1 - sayHi
const sayHi = () => {
	console.log('Hi User');
}

// Listener Function 2 - sayHello
const sayHello = () => {
	console.log('Hello User');
}

// Registering sayHi function as listener
myEmitter.on('userJoined', sayHi);

// Emitting the event
myEmitter.emit('userJoined');

// Registering sayHello function as listener
myEmitter.on('userJoined', sayHello); */