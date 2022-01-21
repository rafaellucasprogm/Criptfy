var botaoDecodificar = document.querySelector('#botao-descodificar')

botaoDecodificar.addEventListener('click',function(){
    var resultadoDecoficado = document.querySelector('.resultado-decripto')
    var inputTexto = document.querySelector('.descodificador')
    var texto = descodificarTexto()
    console.log(texto)

    inputTexto.value = texto 
    
})

function descodificarTexto (){
    var inputTexto = document.querySelector('.descodificador')
    var mensagemUsuario = inputTexto.value
    
    if (mensagemUsuario.includes('enter') ||
        mensagemUsuario.includes('emis') ||
        mensagemUsuario.includes('ai') ||
        mensagemUsuario.includes('ober') ||
        mensagemUsuario.includes('ufat')){

        var msg = mensagemUsuario.replace(/enter/gi,'e')
        .replace(/emis/gi,'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');


    return msg
        } else {

            return 'Esse texto não está criptografado!'
        }
    
}



