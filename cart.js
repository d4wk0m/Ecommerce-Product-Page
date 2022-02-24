var c = 0;
var temp = document.getElementById('carttemp');
var price = document.getElementById('price');
var priceo = document.getElementById('priceo');
var pricea = document.getElementById('pricea');
var quantity = document.getElementById('quantity');
var cartquantity = document.getElementById('cartquantity');
var cartprice = document.getElementById('cartprice');
var cartico = document.getElementById("cart-img");
var carta = document.getElementById("cart");
var checkout = document.getElementById('checkout');
var shoescart = document.getElementById("shoes-cart");
var cartlist = document.getElementById('cartlist');

price.innerText = priceo.innerText;
carta.style.height = "0px";

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
    if (carta.style.height != "0px"){
        carta.style.height = "0px";
    }
    else{
        var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
        carta.style.top = t + "px";
        carta.style.height = "50vh";
    }
}

function addtocart(){
    c+=parseInt(quantity.textContent);
    
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
        temp.style.display = "block";
    }
}

function deletefromcart(){
    c = 0;
}

window.onclick = () => {
    if (c > 0){
        shoescart.style.display = "flex";
        temp.style.display = "none";
        cartquantity.innerText = c;
        cartpric = parseFloat(price.innerText) * c;
        console.log(cartpric);
        cartprice.innerText = cartpric.toString() + ".00";
        checkout.style.display = "block";
    } 
    
    else{
        shoescart.style.display = "none";
        checkout.style.display = "none";
        temp.style.display = "block";
    }
}


