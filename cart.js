var c = 0;
var temp = document.getElementById('carttemp');
var price = document.getElementById('price');
var priceo = document.getElementById('priceo');
var pricea = document.getElementById('pricea');
var quantity = document.getElementById('quantity');
var cartquantity = document.getElementById('cartquantity');
var carta = document.getElementById('carta');
var cartprice = document.getElementById('cartprice');
var cartico = document.getElementById("cart-img");
var cartcontainer = document.getElementById("cart");
var navcontainer = document.getElementById("navcontainer");
var nav = document.getElementById("nav");
var checkout = document.getElementById('checkout');
var shoescart = document.getElementById("shoes-cart");
var cartlist = document.getElementById('cartlist');
var cartilosc = document.getElementById('cartilosc');

price.innerText = priceo.innerText;
carta.style.height = "0px";
shoescart.style.display = "none";
temp.style.display = "block";
checkout.style.display = "none";


function cart(n){
    prv = document.getElementById('quantity').textContent;
    a = parseInt(prv) + n;
    if (a < 1){
        document.getElementById('quantity').textContent = 1;
    }
    else{
        document.getElementById('quantity').textContent = a;
    }
}

cartico.onclick = function(){
    cartcontainer.style.display = "block"
    var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
    carta.style.top = t + "px";
    carta.style.height = "40vh";  
}

cartico.ontouchstart = function(){
    cartcontainer.style.display = "block"
    var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
    carta.style.top = t + "px";
    carta.style.height = "40vh";  
}

function addtocart(){
    c+=parseInt(quantity.textContent);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.setTimeout(() => { 
        cartcontainer.style.display = "block"
        var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
        carta.style.top = t + "px";
        carta.style.height = "40vh";  
      }, 200);
    if (c > 0){
        shoescart.style.display = "flex";
        temp.style.display = "none";
        cartquantity.innerText = c;
        cartpric = parseFloat(price.innerText) * c;
        cartprice.innerText = cartpric.toString() + ".00";
        checkout.style.display = "block";
        cartilosc.style.display = "block";
        cartilosc.innerText = c;
    } 
    
    else{
        shoescart.style.display = "none";
        temp.style.display = "block";
        checkout.style.display = "none";
    }
}

function deletefromcart(){
    shoescart.style.marginLeft = "-100vw"
    c = 0;
    window.setTimeout(() => {
        
        shoescart.style.display = "none";
        temp.style.display = "block";
        checkout.style.display = "none";
        shoescart.style.marginLeft = "0"
      }, 500);
    
}

window.onclick = function(event) {
    if (event.target == cartcontainer) {
        carta.style.height = "0px";
        window.setTimeout(() => {
            cartcontainer.style.display = "none";
          }, 500);
    }
    else if (event.target == navcontainer){
        document.getElementById("nav").style.width = "0";
        document.getElementById("nav").style.paddingLeft = "0";
        window.setTimeout(() => {
            navcontainer.style.display = "none";
          }, 500);
    }
}

window.ontouchstart = function(event) {
    if (event.target == cartcontainer) {
        carta.style.height = "0px";
        window.setTimeout(() => {
            cartcontainer.style.display = "none";
          }, 500);
    }
    else if (event.target == navcontainer){
        document.getElementById("nav").style.width = "0";
        document.getElementById("nav").style.paddingLeft = "0";
        window.setTimeout(() => {
            navcontainer.style.display = "none";
          }, 500);
    }
}


function openNav() {
    navcontainer.style.display = "block";
    window.setTimeout(() => {
        nav.style.width = "50vw";
        nav.style.paddingLeft = "5vw";
        }, 1);
    
  }
  
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("nav").style.paddingLeft = "0";
    window.setTimeout(() => {
        navcontainer.style.display = "none";
        }, 500);
}

/*
window.onclick = function(){
    if (c > 0){
        shoescart.style.display = "flex";
        temp.style.display = "none";
        cartquantity.innerText = c;
        cartpric = parseFloat(price.innerText) * c;
        cartprice.innerText = cartpric.toString() + ".00";
        checkout.style.display = "block";
    } 
    
    else{
        shoescart.style.display = "none";
        checkout.style.display = "none";
        temp.style.display = "block";
    }
}
*/


