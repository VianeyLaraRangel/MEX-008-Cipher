window.cipher = {
    encode: (offset, string) => {
        let resultEncode = '';
        let offsetParsed = (parseInt(offset));
        for (let i=0; i<string.length; i++) {
            let positionAscci = string.charCodeAt(i);            
            if (positionAscci >= 65 && positionAscci <= 90) {
                let positionEncode =((positionAscci-65+offsetParsed)%26+65);
                resultEncode += String.fromCharCode(positionEncode);
            } else if (positionAscci >= 97 && positionAscci <= 122) {
                let positionEncode = ((positionAscci-97+offsetParsed)%26+97);
                resultEncode += String.fromCharCode(positionEncode);
            } else if (positionAscci === 32 || positionAscci === 165 || positionAscci === 164) {
                let positionEncode = positionAscci;
                resultEncode += String.fromCharCode(positionEncode);
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
            } else if (positionAscci <= 122 && positionAscci >= 97) {
                let positionDecode = ((positionAscci+123-offsetParsed) % 26- 97);
                resultDecode += String.fromCharCode(positionDecode);
            } else if (positionAscci === 32 || positionAscci === 165 || positionAscci === 164) {
                let positionDecode = positionAscci;
                resultDecode += String.fromCharCode(positionDecode);
            }
        }
    return (resultDecode);
    }
};
