const message:string = 'Hello World';

function say(something:string):void {
  console.log(something);
}
say(message);



function sayHello(person: string) {
  return "Hello, " + person;
}

let tom = "Tom";
console.log(sayHello(tom));

// error type 
// let tim = [0, 1, 2];
// console.log(sayHello(tim));