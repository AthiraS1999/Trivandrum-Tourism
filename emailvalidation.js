var email=document.getElementById("email");
var error=document.getElementById("error");
function validate()
{
    let regexp=  /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regexp.test(email.value)){
        error.innerHTML="valid email ID";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid email ID";
        error.style.color="red";
        return false;
    }
    
}
