const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(elemento, posicao){  // ForEach(function(currentValue, index, arr), thisValue)
    console.log(`${posicao + 1}. ${elemento}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))