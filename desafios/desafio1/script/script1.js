var idade
var sexo
var foto
var tmp 
var tmp2
var calc
function funcaoVerificar(){
    if(isexM.checked == true){
        sexo = 'M'
    } else if(isexF.checked == true){
        sexo = 'F'
    }
    tmp = document.getElementById('iidade')
    idade = Number(tmp.value)
    tmp2 =2023
    tmp2 -= idade
    idade = tmp2
    tmp = document.getElementById('detec')

    foto = document.getElementById('imagens')
    if(idade >= 1 && idade <= 12){
        if(sexo == 'M'){
            foto.src = "estilos/imagens/jovemgaroto.jpg"
            tmp.innerText = `Detectamos um garoto de ${idade} anos.`
        } else if(sexo == 'F'){
            foto.src = "estilos/imagens/jovemgarota.jpg"
            tmp.innerText = `Detectamos uma garota de ${idade} anos`
        }
    } else if(idade > 12 && idade <= 24){
        if(sexo == 'M'){
            foto.src = "estilos/imagens/adolescentesexoM.jpg"
            tmp.innerText = `Detectamos um adolescente de ${idade} anos`
        } else if(sexo == 'F'){
            foto.src = "estilos/imagens/adolescentesexoF.jpg"
            tmp.innerText = `Detectamos uma adolescente de ${idade} anos`
        }
    } else if(idade > 24 && idade <= 50){
        if(sexo == 'M'){
            foto.src = "estilos/imagens/adulto.jpg"
            tmp.innerText = `Detectamos um adulto de ${idade} anos`
        } else if(sexo == 'F'){
            foto.src = "estilos/imagens/ADULTA.jpg"
            tmp.innerText = `Detectamos uma adulta de ${idade} anos`
        }
    } else if(idade > 50 && idade < 110){
        if(sexo == 'M'){
            foto.src = "estilos/imagens/idoso.jpg"
            tmp.innerText = `Detectamos um idoso de ${idade} anos`
        } else if(sexo == 'F'){
            foto.src = "estilos/imagens/idosa.jpg"
            tmp.innerText = `Detectamos uma idosa de ${idade} anos`
        }
    } else {
        window.alert('verifique os dados inseridos e tente novamente')
    }

}