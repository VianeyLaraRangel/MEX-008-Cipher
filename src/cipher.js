window.cipher = {
    encode: (offset, string) => {
        let result = '';
        let offsetParsed = (parseInt(offset));
        //let stringMinusc = (string.toLowerCase());

        for (let i=0; i<string.length; i++) {
            let stringMayusc = (string.toUpperCase());
            let positionAscci = stringMayusc.charCodeAt(i);
            let positionEncode =((positionAscci-65+offsetParsed)%26+65);
            result += String.fromCharCode(positionEncode);
            }
            return (result);
    },
    decode: (offset, string) => {
        let resultDecode = '';
        let offsetParsed = (parseInt(offset));

        for (let i=0; i<string.length; i++) {
            let stringMayusc = (string.toUpperCase());
            let positionAscci = stringMayusc.charCodeAt(i);
            let positionDecode = ((positionAscci+65-offsetParsed)%26+65);
            resultDecode += String.fromCharCode(positionDecode);
            }
        return (resultDecode);
    }
};
