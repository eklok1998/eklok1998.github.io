
let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("instaimage");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("chunkcaption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



//lightbox
function openYourModal(){
  document.getElementById("yourModal").style.display='block';
}

function closeYourModal(){
  document.getElementById("yourModal").style.display='none';
}

var yourSlideIndex=1;
showYourSlides(yourSlideIndex);

function yourPlusSlides(n){
  showYourSlides(yourSlideIndex += n);
}

function yourCurrentSlide(n){
  showYourSlides(yourSlideIndex=n);
}

function showYourSlides(n){
  var i;
  var yourslides=document.getElementsByClassName("yourSlides");
  var yourdots=document.getElementsByClassName("yourdemo");
  var captionText=document.getElementById("yourcaption");
  if(n>yourslides.length){yourSlideIndex=1}
  if(n<1){yourSlideIndex=yourslides.length}
  for (i=0;i<yourslides.length;i++){
    yourslides[i].style.display="none";
  }

  for(i=0;i<yourdots.length;i++){
    yourdots[i].className=yourdots[i].className.replace(" active","");
  }

  yourslides[yourSlideIndex-1].style.display="block";
  yourdots[yourSlideIndex-1].className += " active";
  captionText.innerHTML=yourdots[yourSlideIndex-1].alt;
}



//validate form
function validateForm() {
  let x = document.forms["form"]["fname", "lname", "email", "phone"].value;
  if (x == "") {
    alert("Fields marked with * must be filled out.");
    return false;
  }
}

