var agora = new Date()
var dia = agora.getDay()


switch(dia){
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2:
        console.log('Terca-Feira')
        break
    case 3: 
        console.log('Quarta-Feira')
        break
    case 4: 
        console.log('Quinta-Feira')
        break
    case 5: 
        console.log('Sexta-Feira')
        break
    case 6: 
        console.log('Sábado')
        break
    default:
        console.log('Dia da Semana So Vai de 0 a 7(domingo a sabado)')
}
    