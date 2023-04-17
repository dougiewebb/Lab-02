'use strict';

let name;
Response = prompt ("What is your name?");
console.log ("Nice to meet you: " + Response);


let answerOne = prompt("Do I have dogs?").toLowerCase()
let answerTwo = prompt("Do I live in TN?").toLowerCase()
let answerThree = prompt ("I am 50 years old?").toLowerCase()
let answerFour = prompt ("I have 4 kids?").toLowerCase()
let answerFive = prompt ("Do I like Basketball?").toLowerCase()
let answerSix = prompt ("I attend David Lipscomp University?").toLocaleLowerCase()



if(answerOne === 'y' || answerOne ==='yes'){
    //console.log("You are correct.");
    alert("You are correct!")   
} else {
    // if 'n' then you are incorrect
    //console.log("You are incorrect!");
    alert("You are incorrect!")
    
}

if(answerTwo === 'y' || answerTwo ==='yes'){
    //console.log("You are correct.");
    alert("You are correct!") 
} else {
    // if 'n' then you are incorrect
    //console.log("You are incorrect!");
    alert("You are incorrect!")
    
}

if(answerThree === 'n' || answerThree ==='no'){
    //console.log("You are correct.");
    alert("You are correct!")  
} else {
    // if 'y' then you are incorrect
    //console.log("You are incorrect!");
    alert("You are incorrect!")
    
}

if(answerFour === 'y' || answerFour ==='yes'){
    //console.log("You are correct.");
    alert("You are correct!")
} else {
    // if 'n' then you are incorrect
    //console.log("You are incorrect!");
    alert("You are incorrect!")
    
}
 
if(answerFive === 'y' || answerFive ==='yes'){
    //console.log("You are correct.");
    alert("You are correct!")
} else {
    // if 'n' then you are incorrect
    //console.log("You are incorrect!");
    alert("You are incorrect!")
   
}

if(answerSix === 'n' || answerSix ==='no'){
    //console.log("You are correct.");
    alert("You are correct!")
} else {
    // if 'y' then you are incorrect
    //console.log("You are incorrect!");
    alert("You are incorrect!")

}    

