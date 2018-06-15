for(var a = 0; a < 5; a++){
    console.log(a)
}
console.log(a) // Não possui escopo de bloco, então é possível acessar a variável fora do bloco sem problemas

for(let b = 0; b < 5; b++){
    console.log(b)
}
// console.log(b) // Possui escopo de bloco, então fora do bloco a variável está undefined, gerando erro ao imprimi-la fora do bloco

var funcs = []

for(var i = 0; i < 5; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[4]()

var funcs2 = []

for(let j = 0; j < 5; j++){
    funcs2.push(function(){
        console.log(j)
    })
}

funcs2[2]()
funcs2[4]()