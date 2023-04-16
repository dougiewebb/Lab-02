'use strict'
//TODO: ask the user's name
let name = prompt ("Welcome to my Page! What is your name?");


let answerOne = prompt("Do I have dogs?").toLowerCase()
let answerTwo = prompt("Do I live in TN?").toLowerCase()
let answerThree = prompt ("I am 50 years old?").toLowerCase()
let answerFour = prompt ("I have 4 kids?").toLowerCase()
let answerFive = prompt ("Do I like Basketball?").toLowerCase()


// if 'y' then you are correct
if(answerOne === 'y' ||
 answerOne ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
if(answerTwo === 'y' ||
 answerTwo ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
if(answerThree === 'n' ||
 answerThree ==='no'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'y' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
if(answerFour === 'y' ||
 answerFour ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}
 
if(answerFive === 'y' ||
 answerFive ==='yes'){
    alert("You are correct!")
    console.log("You are correct.");
} else {
    // if 'n' then you are incorrect
    alert("You are incorrect!")
    console.log("You are incorrect!");
}