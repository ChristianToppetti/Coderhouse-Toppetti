/* Pre entrega: */
// Ejemplo que use un codicional y un ciclo: Un algoritmo que cuenta cuantas veces y en que posicion aparece un caracter:*/

const validChar = (a) => (a.length == 1 && a != "" && a != " ") ? a : a = validChar(prompt("Escribe un(1) caracter."))

const formatList = (a) => {
  let string = ""
  for(let i=0; i < a.length; i++) {
    if(i < a.length-2) {
      string = string + a[i] + ", "
    } 
    else {
      string = string + a[i] + " y " + a[i+1]
      break;
    }
  }
  return string
}

const formatOutput = (char, list) => {
  let string

  if(list.length > 1) {
    string = `El caracter "${char}" aparece ${list.length} veces. Los caracteres numero: ${formatList(list)}`
  }
  else {
    string = `El caracter "${char}" aparece ${list.length} vez. El caracter numero: ${list}`
  }
  return string
}

const checkPrompt = (prompt, char) => {
  let count = []
  for(let i=0; i < prompt.length; i++) {
    if(prompt.charAt(i).toUpperCase() == char.toUpperCase()) count.push(i+1)
  }

  if(count.length == 0) return `No hubo coincidencias con el caracter "${char}"`

  return formatOutput(char, count)
}

let char = validChar(prompt("Escribe un caracter."))
let string = checkPrompt(prompt("Escribe algo."), char)
console.log(string)
/* -- */


let carouselWorking = false
function carousel(right=false) {
  if(carouselWorking) return; /* Bug fix de Spam-click */
  
  let slidesContainer = document.getElementById("carouselCont");
  let slideImg = document.getElementById("carouselElement");
  let limitOfScroll = 0

  if(right) {
    let imgWidth = slideImg.clientWidth
    let newPos = (slidesContainer.scrollLeft + imgWidth)
    let slideAllImg = document.querySelectorAll('#carouselElement');

    slideAllImg.forEach(img => limitOfScroll += img.clientWidth);
    carouselMoveRight(slidesContainer, newPos, limitOfScroll)
    return;
  }

  let imgWidth = slideImg.clientWidth * -1
  let newPos = (slidesContainer.scrollLeft + imgWidth)
  carouselMoveLeft(slidesContainer, newPos, limitOfScroll)
}

function carouselMoveRight(slidesContainer, newPos, limitScroll) { 
  let currentPos = slidesContainer.scrollLeft
  
  carouselWorking = true;
  slidesContainer.scrollLeft = newPos;

  /* Tuve que hacerlo asi en lugar de if(currentPos != newPos && newPos <= limitScroll) por que chrome tiene un bug con slidesContainer.scrollLeft */
  if(currentPos+1 < newPos && newPos < limitScroll-10) 
    setTimeout(carouselMoveRight, 700, slidesContainer, newPos, limitScroll); 
  else
    carouselWorking = false;
}

function carouselMoveLeft(slidesContainer, newPos, limitScroll) {
  let currentPos = slidesContainer.scrollLeft
  
  carouselWorking = true;
  slidesContainer.scrollLeft = newPos;

  if(currentPos > newPos+1 && newPos+1 >= limitScroll)
    setTimeout(carouselMoveLeft, 700, slidesContainer, newPos, limitScroll);
  else
    carouselWorking = false;
}

function showFilters() {
    let id = document.getElementById("sidebarMenu")
    
    if(id.classList.contains("hide"))
      id.classList.remove("hide")
    else
      id.classList.add("hide")
}

function scrollReveal() {
  let reveals = document.querySelectorAll(".shopitem");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < (windowHeight / 2) && elementTop > 0) /*Si elementTop (Top del elemento) llega hasta la mitad de la pantalla (windowHeight / 2) y es mayor a 0 entonces:*/
      reveals[i].classList.add("active");
    else
      reveals[i].classList.remove("active"); 
  }
}
  
window.addEventListener("scroll", scrollReveal);