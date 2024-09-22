var pswd=document.getElementById("pswd");
function validate()
{
if(pswd.value.trim()=='')
    {
        alert("pswd cannot be empty");
        return false;
    }
    else if(pswd.value.length <=5)
    {
        alert("pswd too short");
        pswd.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}