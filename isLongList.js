const prompt = require('prompt-sync')({sigint: true});

let userArray4 = JSON.parse(prompt("Enter an Array: "));

let bool = true

if(userArray4.length >=10){
    console.log("Is the array long? " + bool)
}
else {
    bool = false
    console.log("Is the array long?" + bool)
}