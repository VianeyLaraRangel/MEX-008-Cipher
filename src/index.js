//Botones que van a detonar eventos y en donde se trae la data del html
const buttonCifrar = document.getElementById('button-cifrar');
const buttonDescifrar = document.getElementById('button-descifrar');
const buttonLimpiar = document.getElementById('button-limpiar');

//Eventos click del DOM  funciones
buttonCifrar.addEventListener('click', () => {
    let offsetKey = document.getElementById('offset-box');
    let encodeString = document.getElementById('encode-string');
//Imprimir resultado en el input correspondiente en HTML
    document.getElementById('decode-string').value = window.cipher.encode(offsetKey.value, encodeString.value);    
});

buttonDescifrar.addEventListener('click', () => {
    let offsetKey = document.getElementById('offset-box');
    let decodeString = document.getElementById('decode-string');
//Imprimir resultado en el input correspondiente en HTML
    document.getElementById('encode-string').value = window.cipher.decode(offsetKey.value, decodeString.value);
});

buttonLimpiar.addEventListener('click', () => {
    document.getElementById('formulario-offset').reset();
    document.getElementById('formulario-input').reset();
});