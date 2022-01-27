var botaoCodificar = document.querySelector('#botao-codificar')

botaoCodificar.addEventListener('click', function(){
    var inputTexto = document.querySelector('.codificador')
    var inputTextoDeco = document.querySelector('.descodificador')
 
    var texto = pegarECodifiarTexto()

    inputTextoDeco.value = texto
    console.log(texto)

    inputTexto.value = ''
    

})

function pegarECodifiarTexto(){

    var inputTexto = document.querySelector('.codificador')
    var mensagemUsuario = inputTexto.value
    
    var msg = mensagemUsuario.replace(/e/gi,'enter')
        .replace(/i/gi,'emis')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
    
    return msg 
}