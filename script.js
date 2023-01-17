'use strict'


//  Validation
let forRegistration = document.getElementById('form__reg');
let age = false;

forRegistration.addEventListener('submit', function(event){
    event.preventDefault();

    let form = event.target
    let errors = {};

    let usernameField = document.getElementById('fname').value;

    if ( usernameField.length < 5 ) {
        errors.username = 'Username field is invalid ';
    }

    if ( usernameField == " ") {
        errors.username = "Username Can Not Be empty";
    }

    let password1 = document.getElementById("passw1").value;
    let password2 = document.getElementById("passw2").value;
    let minRequirement = document.getElementById("passw1");
    let passError = document.getElementById("error_mypassword");
  
    minRequirement.addEventListener("keyup", function () {
      let passValue = minRequirement.value;
      let passPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (passValue == "") {
        passError.innerText = "Wrong Password";
        passError.style.color = "brown";
        minRequirement.style.border = "2px solid brown"; 
      } else if (!passValue.match(passPattern)) {

        passError.innerText = " Password must contain at least 8 characters, one uppercase character, one lowercase character and one number ";
        passError.style.color = "brown";
        minRequirement.style.border = "2px solid brown";
      } else {
        passError.innerText = "";
        minRequirement.style.border = "2px solid green";
      }
    });
  
    if (password1 == "") {
      errors.mypassword = "Please enter a password";
    }
    if (password1 != password2) {
      errors.mypassword2 = "Passwords do not match";
    }
  
      let age = false;
      let agree = document.getElementById('agree').checked;
    if ( !agree ){
        errors.agree = " You Must Agree Our Terms And Conditions";
    }
    
    form.querySelectorAll('[name = "age"]').forEach((item) => {
        if (item.checked) {
          age = true;
        }
      });

    if (!age){
        errors.age = " Please Select Your Age ";
    }

    console.log(errors);

    form.querySelectorAll(".error__text").forEach((eLement) => {
        eLement.innerText = " ";
      });

      for (let item in errors) {

        let spanError = document.getElementById("error_" + item);

        if (spanError) {
          spanError.innerText = errors[item];
        }
      }
  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

let passwordShowHide = document.getElementById("passw1");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (passwordShowHide.type == "password") {
    passwordShowHide.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordShowHide.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

let emailfield = document.getElementById('myemail');

emailfield.addEventListener("keyup", function() {
let emailValue = document.getElementById('myemail').value;
let spanErorr = document.getElementById("error_email")
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;


if (emailValue.match(emailPattern)) {
    spanErorr.innerText = "Your Email is Valid";
    spanErorr.style.color = "green";
    emailfield.style.border = "2px solid green";
  } else {
    spanErorr.innerText = "Your Email is Invalid";
    spanErorr.style.color = "brown";
    emailfield.style.border = "2px solid brown";
  }
  if (emailValue == "") {
    spanErorr.innerText = " ";
  }
});





