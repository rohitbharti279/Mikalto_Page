const slides = document.getElementsByClassName("show-slide");

let slideIndex = 1;

function nextSlide(n) {
  displaySlides((slideIndex += n));
}

function currentSlide(n) {
  displaySlides((slideIndex = n));
}

function displaySlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google-translate"
  );
}

displaySlides(slideIndex);
