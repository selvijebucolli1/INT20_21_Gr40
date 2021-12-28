function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    }
    function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    
    var nameErr = emailErr = true;
    if(name == "") {
    printError("nameErr", "Please enter name");
    } else {
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(name) === false) {
    printError("nameErr", "Enter valid name");
    } else {
    printError("nameErr", "");
    nameErr = false;
    }
    }
    if(email == "") {
    printError("emailErr", "enter your email");
    } else {
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {
    printError("emailErr", "Please enter a valid email");
    } else{
    printError("emailErr", "");
    emailErr = false;
    }
    }
    
    if((nameErr || emailErr) == true) {
    return false;
    } else {
    var dataPreview = "You've entered the following details: \n" +
    "Full Name: " + name + "\n" +
    "Email Address: " + email + "\n";
    alert(dataPreview);
    }
};
    