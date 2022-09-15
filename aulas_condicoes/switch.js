var atual = new Date()

var diaSemana = atual.getMonth();



    switch (diaSemana) {

    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sabado')
        break
    case 7:
        console.log('Nada')
        break
    case 8:
        console.log('Setembro')
        break

    default:
        console.log('Erro')
}