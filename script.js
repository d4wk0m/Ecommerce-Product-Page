var nav = document.getElementById("nav");

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

var currentIndex;
function display(index) {
        nav[index].style.display = "block";
        currentIndex = index;

} 

window.onclick = function(event) {
    console.log("huj");
    if (event.target === nav[currentIndex]) {
        nav.style.display = "none";
    }
}

