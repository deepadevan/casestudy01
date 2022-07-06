var bool;
function isValidate(bool){
if(bool){
window.location = "success.html";return false;
}else{
    alert("Invalid Credentials")
    return false;
}
}
function validate(username,password,myCallback){
if ( username == "admin" && password == "12345"){
 bool = true;
 
//window.location = "success.html"; // Redirecting to other page.
//return false;
}
else{
 bool = false;   
}
myCallback(bool);
}
