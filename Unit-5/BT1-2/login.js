function validateForm() {
    var formEl = document.forms['loginForm'];
    var usernameEl = formEl['username'];
    var passwordEl = formEl['password'];
    var usernameMsgError = document.getElementById('usernameError');
    var passwordMsgError = document.getElementById('passwordError');
    var status = true;
    
    // Validate username
    if(usernameEl.value == ""){
        usernameEl.style.border = "2px solid red";
        usernameEl.style.borderRadius = "3px";
        usernameMsgError.style.display = "block";
        status = false;
    }else{
        usernameEl.style.border = "2px solid #ccc";
        usernameEl.style.borderRadius = "3px";
        usernameMsgError.style.display = "none";
        status = true;
    }
    if(passwordEl.value == ""){passwordEl
        passwordEl.style.border = "2px solid red";
        passwordEl.style.borderRadius = "3px";
        passwordMsgError.style.display = "block";
        status = false;
    }else{
        passwordEl.style.border = "2px solid #ccc";
        passwordEl.style.borderRadius = "3px";
        passwordMsgError.style.display = "none";
        status = true;
    }
    if (status == true) {
        if (usernameEl.value == "admin" && passwordEl.value == "123456") {
            document.getElementById("loginError").style.display = "none";
            status = true;
        }else{
            document.getElementById("loginError").style.display = "block";
            status = false;
        }
    }
    return status;
}