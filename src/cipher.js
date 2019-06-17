/*LABORATORIA:Implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos: cipher.encode(offset, string): y cipher.decode(offset, string): */

window.cipher = {
    encode: (offset, string) => {
        let result = '';
        let stringMayusc = (string.toUpperCase());
        let offsetParsed = (parseInt(offset));
        //console.log(offsetParsed, stringMayusc);
//PASO 3: Iterar sobre la palabra para saber cuantas letras cifraremos
        for (let i=0; i<stringMayusc.length; i++) {
            let positionAscci = stringMayusc.charCodeAt(i);
            //console.log(positionAscci);
            let positionEncode =((positionAscci-65+offsetParsed)%26+65);
            //console.log(positionEncode);
            result += String.fromCharCode(positionEncode);
            //console.log(result);
            }
        return (result);
    },
    decode: (offset, string) => {
        let resultDecode = '';
        //let stringMayusc = (string.toUpperCase());
            //console.log(stringMayusc);
        let offsetParsed = (parseInt(offset));
            //console.log(offsetParsed);
        for (let i=0; i<string.length; i++) {
            let positionAscci = string.charCodeAt(i);
            //console.log(positionAscci);
            let positionDecode = ((positionAscci+65-offsetParsed)%26+65);
            //console.log(positionDecode);
            resultDecode += String.fromCharCode(positionDecode);
            //console.log(resultDecode);
            }
        return (resultDecode);
    }
};
