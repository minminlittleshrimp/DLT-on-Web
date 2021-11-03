'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
    console.log('current class name: '+className);
});

function myFunction(){
    const inpObj=document.getElementById("id1");
    if(!inpObj.checkValidity()){
        document.getElementById("msg").innerHTML="Please choose file";
    }
    else{
        document.getElementById("msg").innerHTML="Input is accepted";
    }
}