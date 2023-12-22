var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current_page = 0;
showSlides(current_page);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
    for(var i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function prevSlide() {
    if(current_page > 0) current_page --;
    else current_page = slides.length - 1;
    showSlides(current_page);
}

function nextSlide() {
    if(current_page < slides.length-1) current_page ++;
    else current_page = 0;   
    console.log(current_page);
    showSlides(current_page);
}