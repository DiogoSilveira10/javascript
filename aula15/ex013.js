let num = [5, 8, 9, 2, 1, 6]

console.log(`nosso vetor ${num.length} posicoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`o meu vetor em ordem crescente é: ${num}`)
num.push(7)
console.log(` adicionei um novo numero a minha array: ${num}`)
num.sort()
console.log(`organizei minha array novamente, agora ela é: ${num}`)
console.log(`agora, o primeiro numero da minha array é: ${num[0]}`)

/*for(let n = 0; n < num.length; n++){
        console.log(`o indice ${n} da minha array é ${num[n]}`)
}
*/
for(indices in num){
    console.log(`o indice ${indices} da minha array é ${num[indices]}`)
}
console.log(`o valor 8 esta no elemento ${num.indexOf(8)}`)