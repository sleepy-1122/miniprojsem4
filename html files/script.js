const Email= document.getElementById('Email');
const Password= document.getElementById('Password');
const form= document.getElementById('signup-form');
const errorElement= document.getElementById('error');
form.addEventListener('submit',(e)=>{
let messages=[];
if (Email.value=== ''|| Email.value == null){
    messages.push('Email is required')
}
if(Password.value.length <= 6){
    messages.push('password must be longer than 6 characters')
}
if(Password.value.length>20){
    messages.push('password must be less than 20 characters')
}
if(messages.length>0){
    errorElement.innerText=messages.join(', ');
    e.preventDefault();
}
});
function validate_password() {
 
    let pass = document.getElementById('pass').value;
    let confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
            = '☒ Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Password Matched';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}

function wrong_pass_alert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}
//index.js
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("App running on port 3000");
});
//index.js
app.set("view engine", "ejs");
