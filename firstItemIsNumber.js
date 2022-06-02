const prompt = require('prompt-sync')({sigint: true});

let userArray4 = JSON.parse(prompt("Enter an array "));

let bool = true;
if(typeof userArray4[0] === 'number'){
    console.log ("Is the first character a number? " + bool);
}
else if (typeof userArray4[0]=== 'string'){
    
    console.log(" Is the first character not a number " + bool);
}