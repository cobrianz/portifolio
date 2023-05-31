var slideIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("recent");

    for (i = 0; i <x.length; i++) {
        x[i].style.display = "none";

    }
    slideIndex++;
    if(slideIndex>x.length){
        slideIndex = 1
    }
    x[slideIndex-1].style.display = "flex";
    setTimeout(carousel, 2500);
}

function myfunction() {

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.borderColor = "white";
    
}