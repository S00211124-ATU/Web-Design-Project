/*if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

var logout = document.getElementById('loginlogout');
logout.addEventListener("click", Logout);

function Logout() {

    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}

checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{s
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

} */

null==localStorage.getItem("checkout")&&localStorage.setItem("checkout",0);var checkout=localStorage.getItem("checkout");document.querySelector("#checkout").innerHTML=checkout;var logout=document.getElementById("loginlogout");function Logout(){1==localStorage.getItem("loggedIn")?(localStorage.setItem("loggedIn",0),window.location.href="home.html"):window.location.href="login.html"}function checkLoginStatus(){var e=localStorage.getItem("loggedIn"),o=document.getElementById("userdetails");1==e?(document.querySelector("#loginlogout").innerHTML="Logout",o.classList.remove("d-none"),o.classList.add("d-show")):(s,o.classList.add("d-none"),o.classList.remove("d-show"),document.querySelector("#loginlogout").innerHTML="Login",(o=document.getElementById("loginlogout")).setAttribute("href","login.html"))}logout.addEventListener("click",Logout),checkLoginStatus();
