let pessoa = {nome:'karina',
 sexo:'F',
 peso:75,
 engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

pessoa.engordar(10)
console.log(`${pessoa.nome} pesa ${pessoa.peso}KG`)

