window.cipher = {
    encode: (offset, string) => {
        let resultEncode = '';
        let offsetParsed = (parseInt(offset));
        //let stringMinusc = (string.toLowerCase());

        for (let i=0; i<string.length; i++) {
            console.log(string);
            //let stringMayusc = (string.toUpperCase());
            let positionAscci = string.charCodeAt(i);
            console.log(positionAscci);
            
            if (positionAscci >= 65 && positionAscci <= 90) {
                let positionEncode =((positionAscci-65+offsetParsed)%26+65);
                console.log(positionEncode);
                resultEncode += String.fromCharCode(positionEncode);
            }else if (positionAscci >= 97 && positionAscci <= 122){
                let positionEncode = ((positionAscci-97+offsetParsed)%26+97);
                console.log(positionEncode);
                resultEncode += String.fromCharCode(positionEncode);
            } else {
                console.log('error');   
                }   
        }
    return (resultEncode);
    },

    decode: (offset, string) => {
        let resultDecode = '';
        let offsetParsed = (parseInt(offset));
        for (let i = 0; i < string.length; i++) {
            let stringMayusc = (string.toUpperCase());
            let positionAscci = stringMayusc.charCodeAt(i);
            let positionDecode = ((positionAscci + 65 - offsetParsed) % 26 + 65);
            resultDecode += String.fromCharCode(positionDecode);
        }
    return (resultDecode);
    }
};
