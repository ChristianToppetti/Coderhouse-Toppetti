const remId = 1
const vestId = 2
const calzId = 3

const productos = [remId, "Remera Azul", 1234.41, vestId, "Vestido Blanco", 2134.33, calzId, "Botas Negras", 3213.60, 
                  vestId, "Vestido Azul", 4234.42, remId, "Remera Blanca", 3134.80, calzId, "Sandalias Blancas", 2213.22,
                  vestId, "Vestido Negro", 3210.52, calzId, "Zapatillas Negras", 2510.52, remId, "Remera Negra", 4510.52]

const getProducts = (id) => {
  if(id !== remId && id !== vestId && id !== calzId) 
  return false
  
  let string = ""

  for(let i=0; i < productos.length; i++) {
    if(productos[i] === id) {
      let name = productos[i+1]
      let price = productos[i+2]

      string = `${string} [${name}, ${price}$] `
    }
  }

  return string
}

function showProducts() {
  let products = getProducts(remId) + getProducts(vestId) + getProducts(calzId)
  let stringPrompt = 
  `Lista de procutos:

  ${products}  

  Ingrese:
  1 - Para filtrar por Remeras
  2 - Para filtrar por Vestidos
  3 - Para filtrar por Calzado`

  filterId = parseInt(prompt(stringPrompt))

  products = getProducts(filterId)
  if(!products)
    alert("Filtro ingresado invalido")
  else
    alert(getProducts(filterId))
}

showProducts()