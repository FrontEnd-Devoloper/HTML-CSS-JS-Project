const emailEl = document.getElementById('email');
const numEl = document.getElementById('number');
const passwordEl = document.getElementById('password');
const confPassword = document.getElementById('conf-password');


function data(){

    if (emailEl.value == "" || numEl.value == "" || passwordEl.value == "" || confPassword.value == "") {
        alert('Please fill Data');
        return false;
    }
    else if(numEl.value.length < 10 || numEl.value.length > 10){
        alert("Number Should be of 10 digit ! please enter valid number");
        return false;
    }
    else if(isNaN(numEl.value)){
        alert('Only Number are allowed ! please enter valid number');
        return false;
    }
    
    else if(passwordEl.value != confPassword.value){
        alert('Please Enter same password')
        return false;
    }
    else{
        true;
    }   
}

















   






