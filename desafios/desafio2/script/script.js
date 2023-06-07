var tmp
var tmp2
var tmp3
var n1
var n2
var n3
function conta(){
   
    tmp = document.getElementById('numI')
    n1 = Number(tmp.value)
    tmp2 = document.getElementById('numF')
    n2 = Number(tmp2.value)
    tmp3 = document.getElementById('p')
    n3 = Number(tmp3.value)
    var res = document.getElementById('result')
    res.innerHTML = ''
    while(n1 <= n2){
        res.innerHTML += n1 + '&#x1F449'
        n1 += n3
        if(n1 >= n2){
            res.innerHTML += '&#x1F3C1'
        }
    }
}