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
var cart = document.getElementsByClassName('cart');
var shoescart = document.getElementById("shoes-cart");
var cartlist = document.getElementById('cartlist');

price.innerText = priceo.innerText;
cartquantity.innerText = quantity.innerText;
cartpric = price.innerText * cartquantity.innerText;
cartprice.innerText = cartpric;



if (screen.width > 600) {
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    }
} 
else {
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    }
}

function cart(n){
    prv = document.getElementById('quantity').textContent;
    a = parseInt(prv) + n;
    if (a < 0){
        document.getElementById('quantity').textContent = 0;
    }
    else{
        document.getElementById('quantity').textContent = a;
    }
}

function openNav() {
    a = screen.width / 2;
    a += "px";
    document.getElementById("nav").style.width = a;
    document.getElementById("nav").style.paddingLeft = "5vw";
  }
  
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("nav").style.paddingLeft = "0";
}


cartico.onclick = function(){
    if (carta.style.height === "150px"){
        carta.style.height = "0";
    }
    else{
        var t = document.getElementById('menu').offsetHeight + 0.02 * screen.width;
        carta.style.top = t + "px";
        carta.style.height = "150px";
    }
}



function addtocart(){
    c+=parseInt(quantity.textContent);
    if (c > 0){
        shoescart.style.display = "flex";
        temp.style.display = "none";
    } 
    
    else{
        shoescart.style.display = "none";
        temp.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == cart) {
        console.log("siema");
    }
  } 

function refreshcart(){
    if (c > 0){
        shoescart.style.display = "flex";
        temp.style.display = "none";
    } 
    
    else{
        shoescart.style.display = "none";
        temp.style.display = "block";
    }
}