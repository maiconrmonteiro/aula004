var dataReal = new Date();
    var dia = String(dataReal.getDate()).padStart(2, '0');
    var mes = String(dataReal.getMonth() + 1).padStart(2, '0');
    var ano = dataReal.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    var hora = dataReal.getMinutes()
    var controle = hora + mes + dia

    


function gerarRecibo() {
    var campos = window.document.getElementById('campos')
    var valor = window.document.getElementById('valor')
    var extenso = window.document.getElementById('extenso')
    var pagador = window.document.getElementById('pagador')
    var documento = window.document.getElementById('documento')
    var referente = window.document.getElementById('referente')

    var checagem = window.document.getElementsByName('formaPagto')
    var formaPagto = ''

    if (checagem[0].checked){
        formaPagto = ' Via PIX'
    } else if(checagem[1].checked){
        formaPagto = ' Em dinheiro'
    } else if(checagem[2].checked) {
        formaPagto = ' Por cartão'
    }




    campos.innerHTML = (`<div class="recibo-pronto">
    <p class="controle">Nº ${controle}</p>
    Recebi(emos) de <strong>${pagador.value.toUpperCase()}</strong> - CPF/CNPJ nº <strong>${documento.value}</strong>, a importância de <strong>R$${valor.value}</strong> <strong>( ${extenso.value.toUpperCase()})</strong> referente à <strong>${referente.value.toUpperCase()}</strong><br><br>Para maior clareza firmo(amos) o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.<br><br>
    <p class="obs">Pagamento:  <strong>${formaPagto}</strong></p></div><br>
    <div class="cidade">
        <p class="data">BIGUAÇU, ${dataAtual} </p>
    </div>
        <div class="assinatura">
            <div class="assinatura-ignacio">
                <img src="../imagens/assinatura-ignacio.png" alt="">
            </div>
            <p>_____________________________________________</p><br><br>
            <p>FLORANDA COMERCIO DE FLORES</p>
                <p>83.891.994/0001-00</p>
                <p>(48) 3279-8905</p>
        </div>
        <div class="carimbo">
           <img src="../imagens/carimbro.png" alt="">
        </div>
        <div class="bt_print">
           <input type="button" value="Imprimir" onclick="window.print()"/>
        </div>

        `);

        campos.style.background = '#61184E'
        campos.style.color = 'white'
}