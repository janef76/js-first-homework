// Episode 1

// const name = 'Keith';
//
// const printName = function () {
//   console.log(`My name is ${ name }`);
// }
//
// printName();
//
// // it'll print My name is Keith, as the variable name is a constant and its outside the function.
//
// // Episode 2
//
// const score = 5;
//
// const result = function () {
//   const score = 3;
//   return score;
// }
//
// console.log(result());

// result will be 3, as its returning the const value defined in the function.

// // Episode 3

// const myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// const listAnimals = function () {
//   /*const*/ myAnimals = ['Ducks', 'Dogs', 'Lions'];
//
//   for (/*let*/ i = 0; i < myAnimals.length; i++) {
//     console.log(`${ i }: ${ myAnimals[i] }`);
//   }
// }
//
// listAnimals();

// there will be an error as within function myAnimals isn't declared, also you can't use const for looping the array as temp variable needs to be incremented to loop.
// result is: ['Ducks', 'Dogs', 'Lions] as they're declared within function as is the output.

// Episode 4

// const suspectOne = 'Jay';
// const suspectTwo = 'Val';
// const suspectThree = 'Keith';
// const suspectFour = 'Rick';
//
// const allSuspects = function () {
//   const suspectThree = 'Harvey';
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// }
//
// allSuspects();
// console.log(`Suspect three is: ${ suspectThree }`);

// result will be Jay, Val, Harvey, Rick. printing within the function as suspectThree will be overwritten.
// result outside function, suspect three is Keith as this is declared outside also.

// Episode 5

// const detective = {
//   name: 'Ace Ventura',
//   pet: 'monkey'
// };
//
// const printName = function (detective) {
//   return detective.name;
// }
//
// const detectiveInfo = function () {
//   detective['name'] = 'Poirot';
//   return printName(detective);
// }
//
// console.log(detectiveInfo());

// result will be Poirot as you can change object values even though they are declared as constants


// // Episode 6
//
// const murderer = 'rick';
//
// const outerFunction = function () {
//   const murderer = 'marc';
//
//   const innerFunction = function () {
    // /*const*/ murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log(`The murderer is: ${ murderer }`);

// The innerFunction murderer isn't declared so its an error, if you declare the variable by adding const.
// result would be: The murderer is: rick as it declared and printed outwith the function.
