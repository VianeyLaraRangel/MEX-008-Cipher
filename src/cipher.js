/*LABORATORIA:Implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos: cipher.encode(offset, string): y cipher.decode(offset, string): */

window.cipher = {
    encode: (offset, string) => {
        console.log(offset, string);
//PASO 3: Iterar sobre la palabra para saber cuantas letras cifraremos
    for (let i=0; i<string.length; i++) {
        let positionAscci = string.charCodeAt(i);
        //console.log(positionAscci);
        let positionEncode =((positionAscci-65 + offset) %26 + 65);
        //console.log(positionEncode);
        let result = String.fromCharCode(positionEncode);
        console.log(result);
        }
    return (cipher.encoderesult);
    },
    decode: (offset, string) => {
        console.log(offset, string);
     }
};