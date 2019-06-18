window.cipher = {
    encode: (offset, string) => {
        let result = '';
        let stringMayusc = (string.toUpperCase());
        let offsetParsed = (parseInt(offset));
        for (let i=0; i<stringMayusc.length; i++) {
            let positionAscci = stringMayusc.charCodeAt(i);
            let positionEncode =((positionAscci-65+offsetParsed)%26+65);
            result += String.fromCharCode(positionEncode);
            }
        return (result);
    },
    decode: (offset, string) => {
        let resultDecode = '';
        let stringMayusc = (string.toUpperCase());
        let offsetParsed = (parseInt(offset));
        for (let i=0; i<stringMayusc.length; i++) {
            let positionAscci = stringMayusc.charCodeAt(i);
            let positionDecode = ((positionAscci+65-offsetParsed)%26+65);
            resultDecode += String.fromCharCode(positionDecode);
            }
        return (resultDecode);
    }
};
