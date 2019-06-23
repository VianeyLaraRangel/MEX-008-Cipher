window.cipher = {
    encode: (offset, string) => {
        let resultEncode = '';
        let offsetParsed = (parseInt(offset));
        for (let i=0; i<string.length; i++) {
            let positionAscci = string.charCodeAt(i);            
            if (positionAscci >= 65 && positionAscci <= 90) {
                let positionEncodeMayus =((positionAscci-65+offsetParsed)%26+65);
                resultEncode += String.fromCharCode(positionEncodeMayus);
            } else if (positionAscci >= 97 && positionAscci <= 122) {
                let positionEncodeMinus = ((positionAscci-97+offsetParsed)%26+97);
                resultEncode += String.fromCharCode(positionEncodeMinus);
            } else if (positionAscci === 32) {
                let positionEncodeSpace = positionAscci;
                resultEncode += String.fromCharCode(positionEncodeSpace);
            }   else if (positionAscci >= 33 && positionAscci <= 64) {
                let positionEncodeEspecial = ((positionAscci-33+offsetParsed)%32+33);
                resultEncode += String.fromCharCode(positionEncodeEspecial);
            } else if (positionAscci >= 161 && positionAscci <= 250) {
                let positionEncodeEspecialComplete = ((positionAscci -161 + offsetParsed)%90+161);
                resultEncode += String.fromCharCode(positionEncodeEspecialComplete);
            }
        }
    return (resultEncode);
    },

    decode: (offset, string) => {
        let resultDecode = '';
        let offsetParsed = (parseInt(offset));
        for (let i = 0; i < string.length; i++) {
            let positionAscci = string.charCodeAt(i);
            if (positionAscci >= 65 && positionAscci <= 90) {
                let positionDecode = ((positionAscci+65-offsetParsed) % 26 + 65);
                resultDecode += String.fromCharCode(positionDecode);
            } else if (positionAscci >= 97 && positionAscci <= 122) {
                let positionDecode = ((positionAscci+97+offsetParsed) % 26 + 97);
                resultDecode += String.fromCharCode(positionDecode);
            } else if (positionAscci === 32 || positionAscci === 165 || positionAscci === 164) {
                let positionDecode = positionAscci;
                resultDecode += String.fromCharCode(positionDecode);
            }
        }
    return (resultDecode);
    }
};
