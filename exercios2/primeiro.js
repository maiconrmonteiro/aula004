

function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let resultado = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert ('Você não pode digitar 0')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert (`Não pode usar passo ${p}, vai ser considerado 1`)
            p = 1
        }
        if (i < f){
            for(let c = i ; c <= f ; c += p){
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = i; c >= f; c -= p)
            resultado.innerHTML += `${c} \u{1F449} `
        }

        

        resultado.innerHTML += `\u{1F3C1}`
    }
}