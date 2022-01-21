var botaoCopiar = document.querySelector('.botao-copiar')

botaoCopiar.addEventListener('click', function(){

    var inputTextoDeco = document.querySelector('.descodificador')

    inputTextoDeco.select()
    inputTextoDeco.setSelectionRange(0, 99999)
    document.execCommand('copy')

})

