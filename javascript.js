let passwordInput=document.querySelector(".right-side form .field input#password");
let confirmPasswordInput=document.querySelector(".right-side form .field input#password-confirm");

let passwordMismatchTextElement=document.querySelector(".right-side form .field #password-mismatch");
let minimumPasswordLengthTextElement=document.querySelector(".right-side form .field #min-length");
let letterInPasswordTextElement=document.querySelector(".right-side form .field #min-letter");
let digitInPasswordTextElement=document.querySelector(".right-side form .field #min-digit");

function checkPasswordLength()
{
    if(passwordInput.value.length<8){
        minimumPasswordLengthTextElement.style.display="block";
        return false;
    }
    minimumPasswordLengthTextElement.style.display="none";
    return true;
}
function checkPasswordHasLetter()
{
    let containsLetterRegExp=/[a-z]/gi;
    let passwordContainsLetter=containsLetterRegExp.test(passwordInput.value);
    if(!passwordContainsLetter){
        letterInPasswordTextElement.style.display="block";
        return false;
    }
    letterInPasswordTextElement.style.display="none";
    return true;
}
function checkPasswordHasDigit()
{
    let containsDigitRegExp=/[0-9]/g;
    let passwordContainsDigit=containsDigitRegExp.test(passwordInput.value);
    if(!passwordContainsDigit){
        digitInPasswordTextElement.style.display="block";
        return false;
    }
    digitInPasswordTextElement.style.display="none";
    return true;
}
function checkPasswordsMatch()
{
    console.log(passwordInput.value.type+" "+confirmPasswordInput.value.type);
    if(passwordInput.value!==confirmPasswordInput.value)
    {
        passwordMismatchTextElement.style.display="block";
        return false;
    }
    passwordMismatchTextElement.style.display="none";
    return true;
}
function checkPasswordValidity()
{
    let passwordIsValid=true, passwordsMatch=true;
    console.log(passwordInput.value+" "+confirmPasswordInput.value);
    if(!checkPasswordLength())passwordIsValid=false;
    if(!checkPasswordHasLetter())passwordIsValid=false;
    if(!checkPasswordHasDigit())passwordIsValid=false;
    if(!checkPasswordsMatch())passwordIsValid=false, passwordsMatch=false;

    if(!passwordIsValid)passwordInput.setCustomValidity("Invalid field.");
    else passwordInput.setCustomValidity("");
    
    if(!passwordsMatch)confirmPasswordInput.setCustomValidity("Invalid field.");
    else confirmPasswordInput.setCustomValidity("");
}
passwordInput.addEventListener("change", checkPasswordValidity);
confirmPasswordInput.addEventListener("change", checkPasswordValidity);