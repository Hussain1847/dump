let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";



document.querySelector("body").prepend(newBtn);



const div = document.querySelector("div");


//const div = document.getElementById("myDiv");
    div.style.backgroundColor = "lightblue"; // You can use any color here
    div.style.color = "darkblue"; // Changes text color


let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

//let div = document.querySelector("div");
//div.onmouseover = () => {
//  console.log("you are inside div");
//}

