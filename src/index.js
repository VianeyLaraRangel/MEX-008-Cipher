/*LABORATORIA: Aquí debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.*/

//Variables a utilizar

let buttonCifrar = document.getElementById('button-cifrar');

//Eventos del DOM
buttonCifrar.addEventListener('click', () => {
    let offsetKey = document.getElementById('offset-box');
    let encodeString = document.getElementById('encode-string');
    //console.log(encodeString.value);
        offsetKey.value
        window.cipher.encode(offsetKey.value, encodeString.value);
});

//PASO 1: Obtener offset (convertirlo a entero (parseInt)) y el string a cifrar, luego guardár la data en una varible.


//console.log(offsetKey);

//PASO 2: Obtener la cadena/string del texto a cifrar y convertirlo a mayúscula.(Pasarlo como parámetro al objeto window.cipher)

//PASO 4: Imprimir resultado en el input correspondiente
//document.getElementById(encodex-string).value.innerHTML

//Invoca las funciones que obtuvimos

