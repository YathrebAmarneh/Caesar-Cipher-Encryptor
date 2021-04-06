
//program to implement Caesar Cipher Encryptor

function encryptor(str) {
    const k = 7; // key encryptor
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split("") //26 char
    strArr = str.split("")
    // console.log(englishAlphabet)
    // console.log(strArr)

    for (let i = 0; i < strArr.length; i++) {
        j = englishAlphabet.indexOf(strArr[i])
        if (j >= englishAlphabet.length - k) {
            f = (j + k) % englishAlphabet.length
            strArr[i] = englishAlphabet[f]
        }
        else {
            strArr[i] = englishAlphabet[j + k]
        }
    } //end of for loop

    console.log(strArr)
}
str = "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf"

encryptor(str)