/*LABORATORIA: Aquí debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.*/

//Botones que van a lanzar las funciones
const buttonCifrar = document.getElementById('button-cifrar');
const buttonDescifrar = document.getElementById('decode-string');

//Eventos del DOM en donde se trae la data del html e invocación de funciones
buttonCifrar.addEventListener('click', () => {
    let offsetKey = document.getElementById('offset-box');
    let encodeString = document.getElementById('encode-string');
    document.getElementById('decode-string').value = window.cipher.encode(offsetKey.value, encodeString.value);
    //console.log(encodeString.value);
        
});

buttonDescifrar.addEventListener('click', () => {
    let offsetKey = document.getElementById('offset-box');
    let decodeString = document.getElementById('decode-string');
        //console.log(decodeString.value);
        window.cipher.decode(offsetKey.value, decodeString.value);
});

//Imprimir resultado en el input correspondiente


//PASO 1: Obtener offset (convertirlo a entero (parseInt)) y el string a cifrar, luego guardár la data en una varible.
//PASO 2: Obtener la cadena/string del texto a cifrar y convertirlo a mayúscula.(Pasarlo como parámetro al objeto window.cipher)
//PASO 3.1: Saber cuál es la posición ascci para c/letra que se recorre
//PASO 3.2: Aplicar fórmula al texto ascci para saber cual es la nueva posición (x -65 + n) % 26 +65*
//PASO 3.3: Teniendo la posición definitiva de cifrado, transformar a alfabeto y guardarlo en una variable
//PASO 4: Imprimir resultado en el input correspondiente
//document.getElementById(encodex-string).value.innerHTML