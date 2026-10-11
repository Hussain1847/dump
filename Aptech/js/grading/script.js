for (let count = 1; count <= 5;  count++) {
    console.log("Apna College");//5 execute
}

console.log("loop has ended");




let sum = 0;
for (let  i= 1; i <= 5;  i++) {
    sum=sum + i ;//sum = 15 3+3+3+3+3+
}

console.log("sum =", sum);



let score = prompt("enter your score(0-100):");
let grade;

if (score >=90 && score <=100) {
    grade = "A";
}else if (score >=70 && score <= 89) {
    grade = "B";
}else if (score >=60 && score <= 69) {
    grade = "C";
}else if (score >=50 && score <= 59) {
    grade = "D";
}else if (score >=0 && score <= 49) {
    grade = "F";
}

console.log("according to your scores,your grade was :",grade )


let str ="apnacollege"
newStr = str.toUpperCase();
console.log(newStr1);

////string are immutable//////


let str4 = "     apna college  js  ";
console.log(str4.trim())