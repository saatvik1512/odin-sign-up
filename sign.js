const passwordOne = document.querySelector('#Password');
const passwordTwo = document.querySelector('#confirm-Password');
const submitButton = document.querySelector('#submit');
const formControl = document.querySelector("form");
const allInputs = document.querySelectorAll("input");


function passwordChecker(){
    if (passwordOne.value !== passwordTwo.value){
        passwordTwo.setCustomValidity("Password not matching");
        passwordTwo.style.border = "1px solid red";
    }
    else if (passwordOne.value === passwordTwo.value && passwordOne.checkValidity()){
        passwordTwo.style.border = "2px solid green";
        passwordTwo.setCustomValidity("");
    }
}
