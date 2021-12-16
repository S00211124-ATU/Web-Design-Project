/*var loginStatus = document.getElementById('user-login');
loginStatus.addEventListener("submit", loginUser);

function loginUser() {
    
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="random@gmail.com" && password=="12345")  {   
        localStorage.setItem('loggedIn',1);    
        window.location.href = "home.html"; 
    }
    else {
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
    event.preventDefault();
} */

var loginStatus=document.getElementById("user-login");function loginUser(){var e=document.getElementById("emailAddressID").value,t=document.getElementById("passwordID").value;"random@gmail.com"==e&&"12345"==t?(localStorage.setItem("loggedIn",1),window.location.href="home.html"):(localStorage.setItem("loggedIn",0),document.getElementById("loginerror").classList.remove("d-none"));event.preventDefault()}loginStatus.addEventListener("submit",loginUser);