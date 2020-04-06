

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("project");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
    document.getElementsByClassName("project-title")[slideIndex-1].style.padding = "20px";
}
var isSlide = true;
var slideIndex = 1;
showSlides(slideIndex);

function show(){
    if(isSlide){
        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.display = "none";
        var slides = document.getElementsByClassName("project");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";  
        }
        isSlide = false;
    }else{
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "block";
        showSlides(slideIndex);
        isSlide = true;
    }
}

