function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res')    

    if (fano.value == 0 || fano.value > ano) {
        window.alert ('Verifique os dados digitados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value;
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebem.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebef.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosof.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.<br><br>`
        res.appendChild(img)
    }


}