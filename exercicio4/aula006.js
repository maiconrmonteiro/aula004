let numero = document.querySelector('#campo_numero');
let btn = document.querySelector('#btn');


function resultados(){
    let tabuada_pronta = document.querySelector('#resultado');
    tabuada_pronta.innerHTML = ''

    if (numero.value.length == 0) {
        tabuada_pronta.innerHTML = (`Você precisa adicionar um numero`);
        
    } else {
        for (n = 1 ; n <= 10 ; n++) {
            tabuada_pronta.innerHTML += (`
            <div class="css_tabuada">
                ${n} X ${numero.value} = ${n * numero.value}<br>
            <div>`);
        }
        
        
    }
    
    
}

