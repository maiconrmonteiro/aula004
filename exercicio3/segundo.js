/*function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0 ){
        alert('Por favor, digite um numero!')

    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            
        }
    }
}*/












let num = document.getElementById('txtn');
let campo = document.getElementById('res');

function tabuada() {
    num = Number(num.value);

    if (num.value.lenght == 0) {
        campo.innerHTML = 'Digite um numero valido';
    } else {
        alert ('ok')
    }

}





























