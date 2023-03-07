const validChar = (a) => (a.length == 1 && a != "") ? a : a = validChar(prompt("Escribe un(1) caracter."))

const formatList = (a) => {
  let string = ""
  for(let i=0; i < a.length; i++) {
    if(i < a.length-2) {
      string = string + a[i] + ", "
    } 
    else {
      string = string + a[i] + " y " + a[i+1]
      break
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

const checkPrompt = (string, char) => {
  if(string.length == 0)
  return checkPrompt(prompt("Escribe algo.."), char)

  let count = []

  for(let i=0; i < string.length; i++) {
    if(string.charAt(i).toUpperCase() == char.toUpperCase()) count.push(i+1)
  }

  if(count.length == 0) return `No hubo coincidencias con el caracter "${char}"`

  return formatOutput(char, count)
}

let char = validChar(prompt("Escribe un caracter."))
let string = checkPrompt(prompt("Escribe algo."), char)
alert(string)