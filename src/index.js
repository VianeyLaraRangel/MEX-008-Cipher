
/*LABORATORIA: Aquí debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.*/

//Detonar eventos del DOM
//offsetKey.addEventListener('click', window.cipher.encode());


//Declarar una función que obtenga los datos del DOM
const getData = () => {
//PASO 1: Obtener número de desplazamiento (offset/key/llave), guardárlo en una varible y convertirlo a entero (parseInt). (Pasarlo como parámetro al objeto window.cipher)
const offsetKey = document.getElementById('offset-box').value;
console.log('holaaaa');
}

//PASO 2: Obtener la cadena/string del texto a cifrar y convertirlo a mayúscula.(Pasarlo como parámetro al objeto window.cipher)
// let string = document.getElementById('decodex-string').value;
// //console.log(codexString);

//PASO 4: Imprimir resultado en el input correspondiente
//document.getElementById(encodex-string).value.innerHTML




//Conocer la posición del código ASCII para desplazar
// codexString.charCodeAt(0);
// console.log(codexString);

//Invoca las funciones que obtuvimos
getData();
// window.cipher.encode();
