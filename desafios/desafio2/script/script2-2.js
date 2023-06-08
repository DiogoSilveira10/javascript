function gerarTabuada(){
    let numero = document.getElementById('num')
    let txtabuada = document.getElementById('ilista')
    let tab = 1
    let res
    if(num.value.lenght == 0){
        window.alert('Digite um numero')
    } else {
        while(tab < 10){
            let item = document.createElement('option')
            item.text = `${numero} * ${tab} = ${res}`
            tab.appendChild(item)
            tab ++
        }
    }
}