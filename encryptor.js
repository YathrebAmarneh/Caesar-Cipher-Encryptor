
//program to implement Caesar Cipher Encryptor

function encryptor(str) {
    const k = 7; // key encryptor
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split("") //26 char
    strArr = str.split("")
    // console.log(englishAlphabet)
    // console.log(strArr)

    // for (let i = 0; i < strArr.length; i++) {
    //     const j = englishAlphabet.indexOf(strArr[i])
    //     if (j >= englishAlphabet.length - k) {
    //         const f = (j + k) % englishAlphabet.length
    //         strArr[i] = englishAlphabet[f]
    //     }
    //     else {
    //         strArr[i] = englishAlphabet[j + k]
    //     }
    // } //end of for loop



    strArr.map((char) => {

        const j = englishAlphabet.indexOf(char)
        if (j >= englishAlphabet.length - k) {
            const f = (j + k) % englishAlphabet.length
            char = englishAlphabet[f]
            console.log(englishAlphabet[f])
        }
        else {
            char = englishAlphabet[j + k]
            console.log(englishAlphabet[j + k])
        }
    })


}
str = "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf"

encryptor(str)