// alert("Test");
function validate(){
    // alert("Test")
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var mobile = document.getElementById("mobile").value;
    var msg = document.getElementById("msg").value;
    var male = document.getElementById("male").checked;//true or false
    var female = document.getElementById("female").checked;
    var crik = document.getElementById("crik").checked;//true or false
    var carm = document.getElementById("carm").checked;//true or false
    var state = document.getElementById("state").value

    //regular expressions
    var namepattern = /^[a-z]+$/;
    var emailpattern = /^[a-z]+[a-z0-9\.\_]+[@]+[a-z\.]+[.]+[a-z]+$/;
    //rathan.basa05@gmail.com
    var passwordpattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%])[a-zA-Z0-9@#$%]+$/;
    var mobilepattern = /^[0-9]+$/;

    if(name.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter name";
        document.getElementById("name").focus();
        return false;
    }
    if(!name.match(namepattern))
    {
        document.getElementById("error").innerHTML = "Please enter only small characters";
        document.getElementById("name").focus();
        return false;
    }
    if(email.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter email";
        document.getElementById("email").focus();
        return false;
    }
    if(!email.match(emailpattern)){
        document.getElementById("error").innerHTML = "Please enter email ex abc@xyz.com";
        document.getElementById("email").focus();
        return false;
    }
    if(password.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter password";
        document.getElementById("pwd").focus();
        return false;
    }
    if(!password.match(passwordpattern)){
        document.getElementById("error").innerHTML = "Please enter password and atleast one small, capital, numeric and special characters @#$%";
        document.getElementById("pwd").focus();
        return false;
    }
    if(mobile.length != 10){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter mobile and 10 digits only";
        document.getElementById("mobile").focus();
        return false;
    }
    
    if(!mobile.match(mobilepattern)){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter mobile and numerics only";
        document.getElementById("mobile").focus();
        return false;
    }

    if(msg.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter Message";
        document.getElementById("msg").focus();
        return false;
    }
    if(male==false && female == false){
        document.getElementById("error").innerHTML = "Please select Gender";
        document.getElementById("male").focus();
        return false;
    }
    
    if(crik==false && carm == false){
        document.getElementById("error").innerHTML = "Please select atleast one hobby";
        document.getElementById("crik").focus();
        return false;
    }
    if(state=='select state'){
        document.getElementById("error").innerHTML = "Please select state";
        document.getElementById("state").focus();
        return false;
    }
}