function gerarTabuada(){
    let numero = document.getElementById('num')
    let tab = document.getElementById('ilista')
    if(numero.value.length == ''){
        window.alert('Digite um numero')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while(c < 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}