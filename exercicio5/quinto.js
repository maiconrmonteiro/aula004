let num = window.document.getElementById('fnum');
let lista = window.document.getElementById('flista');
let res = window.document.getElementById('res')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item);
    }else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    res.innerHTML = ``
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media = soma / valores.length
            if(valores[pos] > maior)
            maior = valores[pos]
            
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior numero informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor numero indormado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`

    }
      
}