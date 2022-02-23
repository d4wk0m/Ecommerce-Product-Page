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
