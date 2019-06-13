/*LABORATORIA:Implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos: cipher.encode(offset, string): y cipher.decode(offset, string):

window.cipher = {
    //encode: (offset, string) => {
//PASO 3: Iterar sobre la palabra para saber cuantas letras cifraremos
//     for (let i= 0; i<(string.length); i++) {
//     //PASO 3.1: Saber cuál es la posición ascci para c/letra que se recorre
//         let asciiPosition = string.charCodeAt(i);
//         //console.log('asciiPosition');
    
//     /*PASO 3.2: Aplicar fórmula al texto ascci para saber cual es la nueva posición (x -65 + n) % 26 +65*/
//         let enCodexString = (asciiPosition-65 + offset) %26 + 65;

//     //PASO 3.3: Teniendo la posición definitiva de cifrado, transformar a alfabeto y guardarlo en una variable
//     let result = String.fromCharCode(enCodexString);
//         }
//         return result;
//     }
};