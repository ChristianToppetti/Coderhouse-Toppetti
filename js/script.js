function showFilters() {
    var id = document.getElementById("sidebarMenu")
    
    if(id.classList.contains("hide")) {
        id.classList.remove("hide")
    } 
    else {
        id.classList.add("hide")
    }
}

function reveal() {
  var reveals = document.querySelectorAll(".shopitem");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight / 2 && elementTop > 0) {
      /*Si elementTop (Top del elemento) llega hasta la mitad de la pantalla (windowHeight / 2) y es mayor a 0 entonces:*/
      reveals[i].classList.add("active");
    } 
    else {
      reveals[i].classList.remove("active");
    }
  }
}
  
window.addEventListener("scroll", reveal);

var carTimeout = false;

function carouselNext(){
  var slidesContainer = document.getElementById("carouselCont");
  var slideImg = document.getElementById("carouselElement");
  var imgWidth = slideImg.clientWidth;

  if(!carTimeout) {
    carTimeout = true;
    setTimeout(carouselFix, 200, slidesContainer.scrollLeft, slidesContainer, imgWidth, true);
    slidesContainer.scrollLeft += imgWidth;
  } 
}

function carouselPrev() {
  var slidesContainer = document.getElementById("carouselCont");
  var slideImg = document.getElementById("carouselElement");
  var imgWidth = slideImg.clientWidth;

  if(!carTimeout) {
    carTimeout = true;
    setTimeout(carouselFix, 200, slidesContainer.scrollLeft, slidesContainer, imgWidth, false);
    slidesContainer.scrollLeft -= imgWidth;
  } 
}

function carouselFix(scrollLeft, slidesContainer, imgWidth, isnext) { /* Para que no se bugee cuando se spamea el click (en esta funcion perdi como 3 horas jaja) */
  if(isnext) {
    if ((scrollLeft + imgWidth) - slidesContainer.scrollLeft == 0 || (scrollLeft + imgWidth) == (slidesContainer.scrollLeft + imgWidth)) {
      carTimeout = false;  /* Con estas 2 condiciones carTimeout se pone en false solo cuando el scroll termina de moverse*/
    }
    else {
      setTimeout(carouselFix, 200, scrollLeft, slidesContainer, imgWidth, isnext);
    }
  }
  else {
    if ((scrollLeft - imgWidth) - slidesContainer.scrollLeft == 0 || (scrollLeft - imgWidth) == (slidesContainer.scrollLeft - imgWidth)) {
      carTimeout = false;
    }
    else {
      setTimeout(carouselFix, 200, scrollLeft, slidesContainer, imgWidth, isnext);
    }
  }
}
