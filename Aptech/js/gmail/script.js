 function getvalue(){
    let email = document.querySelector("#email").value.trim();
    let pass =document.querySelector("#password").value.trim();


    let user ="zaid@gmail.com"
    let input ="123"

    if (email === user && pass === input){
        alert("you have enter the correct email")
        window.location.assign(home.html)
    }
    else{
        alert("program");
    }
 }