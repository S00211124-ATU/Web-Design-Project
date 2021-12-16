/*var additem = document.getElementById('addtocart');
additem.addEventListener("click", addToCart);

function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}*/

var additem=document.getElementById("addtocart");function addToCart(){var e=localStorage.getItem("checkout");e++,localStorage.setItem("checkout",e),document.querySelector("#checkout").innerHTML=e}additem.addEventListener("click",addToCart);