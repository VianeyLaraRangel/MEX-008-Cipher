/*LABORATORIA:Implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:

cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.

cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.*/

window.cipher = {
    encode: (offset, string) => {
//PASO 3: Iterar sobre la palabra para saber cuantas letras cifraremos
for (let i= 0; i<string.length; i++) {
    //PASO 4: Saber cuál es la posición ascci para c/letra que se recorre
let asciiPosition = string.charCodeAt(i);
console.log(asciiPosition);
/*PASO 5: Aplicar fórmula al texto ascci para saber cual es la nueva posición
(x -65 + n) % 26 +65*/
let enCodexString = (asciiPosition-65 + key) %26 + 65;
//PASO 6: Teniendo la posición definitiva de cifrado, transformar a alfabeto
let enCodexStringResult = String.fromCharCode(enCodexString);
//PASO 7: Imprimir resultado en el input correspondiente
document.getElementById(encodex-string).value += enCodexString
        }
    }
};