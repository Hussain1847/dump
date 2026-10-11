let gameNum = 25
let userNum = prompt("Guess the game :");

while (userNum != gameNum) {
    userNum = prompt("you entered wrong number. guess again:");
}



console.log("congrats,you entered the right number");


let str = "apnacollege";
console.log(str.length);

console.log(str[1]);//p position

//```template
let obj = {
    item: "pen",
    price: 10,
};



//${expression}  string interpolation
let output = `the cost of ${obj.price} rupees`;
console.log(output);

console.log("the cost of", obj.item, "is", obj.price, "rupees");




//Template Literals
let specialString = `This is a Template literal`;
console.log(specialString);
console.log(typeof specialString);


//Template literals
console.log("apna\nCollege") ///dosri line after\n
console.log("apna\tCollege") ///gap line after\t

