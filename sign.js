const passwordOne = document.querySelector('#Password');
const passwordTwo = document.querySelector('#confirm-Password');
const submitButton = document.querySelector('#submit')

function passwordChecker(){
    if (passwordOne.value !== passwordTwo.value){
        passwordTwo.setCustomValidity("Password not matching");
        passwordTwo.style.border = "2px solid red";
    }
    else if (passwordOne.value === passwordTwo.value){
        passwordTwo.style.border = "2px solid green";
        passwordTwo.setCustomValidity("Password matching");
    }
}
