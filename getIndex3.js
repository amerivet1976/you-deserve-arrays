const prompt = require('prompt-sync')({sigint: true});

let userArray3 = JSON.parse(prompt("Enter an Array: "));


console.log(userArray3.length);

if(userArray3.length>=4){

console.log(userArray3[3]);
}

else{
    console.log(userArray3[userArray3.length - 1]);
}

