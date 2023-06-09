let vetor = []
let qtN = 0
let r = 0
let s = 0
function addnumero(){
    
    
    let sel = document.getElementById('addvalor')
    let txt = document.createElement('option')
    sel.appendChild(txt)
    let tmpN = document.getElementById('numero')
   
    vetor.push(Number(numero.value))
    txt.text = `Valor ${vetor[qtN]} foi adicionado`
    qtN++    
    vetor.sort()
}
function finalizarConta(){

    let escrever 
    let quantidade = document.getElementById('quantid')
    let maior = document.getElementById('maior')
    let menor = document.getElementById('menor')
    let soma = document.getElementById('soma')
    let media = document.getElementById('media')

    quantidade.innerHTML = `O numero de valores adicionados foram: ${qtN}`
    maior.innerHTML = `O maior numero adicionado foi: ${vetor[qtN-1]}`
    menor.innerHTML = `O menor numero adicionado foi: ${vetor[0]}`
    r = 0
    for(nu in vetor){
        r += Number(vetor[nu])
    }
    soma.innerHTML = `A soma de todos os valores adicionados é: ${r}`

    media.innerHTML = `A media de todos os valores adicionados é: ${r/qtN}`




    /*
    r = 0
    s = 0
    
    escrever = document.getElementById('div')
    quantidade = document.createElement('p')
    maior = document.createElement('p')
    menor = document.createElement('p')
    soma = document.createElement('p')
    media = document.createDocumentFragment('p')

    escrever.appendChild(quantidade)
    escrever.appendChild(maior)
    escrever.appendChild(menor)
    escrever.appendChild(soma)
    escrever.appendChild(media)


    quantidade.innerText = `o numero de valores adicionados foram ${qtN}`
    maior.innerText = `o maior numero adicionado foi:${vetor[qtN-1]}`
    menor.innerText = `o menor numero adicionado foi: ${vetor[0]}`
   
    for(let n = 0; n < qtN; n++){
        r += Number(vetor[n])
    }
    soma.innerHTML = `a soma de todos os numeros inseridos é: ${r}`*/
}