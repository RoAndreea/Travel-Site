var slideIndex = 1;
window.onload = function(){
//	var slideIndex = n;
showSlides(slideIndex); 
//instantiere ReviewSection
reviewSection = new ReviewSection();

//update reviews based on data, regardless of html
// DEPRECATED | used just as a seed for initial data
reviewSection.updateReviewSection();

//adaugare listener on form submit
document.getElementById("review-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let nameValue = document.getElementById("review-form__name").value;
    let textValue = document.getElementById("review-form__text").value;
    reviewSection.addReview(new Review(nameValue, textValue));
    document.getElementById("review-form__name").value = "";
    document.getElementById("review-form__text").value = "";
});}

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
  var dots = document.getElementsByClassName("dot");
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
}



