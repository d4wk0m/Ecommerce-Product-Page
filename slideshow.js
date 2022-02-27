var slideIndex = 1;
showSlides(slideIndex);
active(slideIndex - 1);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    active(n - 1);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    }

function active(n){
    document.querySelectorAll(".active").forEach((item) => {
        item.classList.remove('active');
    })
    var thumbnail = document.getElementsByClassName('demo');
    var tcontainer = document.getElementsByClassName('column')
    thumbnail[n].classList.add("active");
    tcontainer[n].classList.add('activec');
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