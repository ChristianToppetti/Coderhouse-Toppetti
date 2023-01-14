function showFilters() {
    var id = document.getElementById("sidebarMenu")
    
    if(id.classList.contains("hide")) {
        id.classList.remove("hide")
    } else {
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