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
var modal = document.getElementById('modal');
var closemodal = document.getElementById('closemodal');
var modalimg = document.getElementById('modalimg');
var myslide = document.getElementsByClassName('myslideimg');
var a = myslide[0].src;


price.innerText = priceo.innerText;
carta.style.height = "0px";
shoescart.style.display = "none";
temp.style.display = "block";
checkout.style.display = "none";

for (i = 0; i < myslide.length; i++) {
    myslide[i].addEventListener("click", function() {
        a = this.src;
        console.log(a);
    })
}

function openclose(){
    window.setTimeout(() => {
        modalimg.src = a;
        modal.style.display = "flex";
        console.log(window.screen.height);
        console.log(window.screen.width);
        if (window.screen.width >= window.screen.height){
            modalimg.style.height = "70vh";
            modalimg.style.width = "70vh";
        }
        else{
            modalimg.style.width = "70vw";
            modalimg.style.height = "70vw";
        }
      }, 10);
}



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

    if (window.screen.width >= 768){
        
        carta.style.height = "75vh";   
    }
    else if(window.screen.width >= 600){
        carta.style.height = "60vh";
    }
    else{
        carta.style.height = "50vh";  
    }
}

// cartico.ontouchstart = function(){
//     cartcontainer.style.display = "block"
//     var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
//     carta.style.top = t + "px";
//     if (window.screen.width >= 600){
//         carta.style.height = "60vh";  
//     }
//     else{
//         carta.style.height = "50vh";  
//     }  
// }

function addtocart(){
    c+=parseInt(quantity.textContent);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.setTimeout(() => { 
        cartcontainer.style.display = "block"
        var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
        carta.style.top = t + "px";
        if (window.screen.width >= 768){
        
            carta.style.height = "75vh";   
        }
        else if(window.screen.width >= 600){
            carta.style.height = "60vh";
        }
        else{
            carta.style.height = "50vh";  
        }
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
        cartilosc.style.display = "none";
        cartilosc.innerText = c;
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
    else if (event.target == modal) {
        modal.style.display = "none";
    }
}

// window.ontouchstart = function(event) {
//     if (event.target == cartcontainer) {
//         carta.style.height = "0px";
//         window.setTimeout(() => {
//             cartcontainer.style.display = "none";
//           }, 500);
//     }
//     else if (event.target == navcontainer){
//         document.getElementById("nav").style.width = "0";
//         document.getElementById("nav").style.paddingLeft = "0";
//         window.setTimeout(() => {
//             navcontainer.style.display = "none";
//           }, 500);
//     }
// }


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


