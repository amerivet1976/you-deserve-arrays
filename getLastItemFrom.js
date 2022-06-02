const prompt = require('prompt-sync')({sigint: true});

let userArray2 = JSON.parse(prompt("Enter an array: "));

console.log(userArray2[userArray2.length-1]);

