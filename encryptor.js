
//program to implement Caesar Cipher Encryptor

function encryptor(str) {
    const k = 2; // key encryptor
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyzab".split("")
    strArr = str.split("")
    // console.log(englishAlphabet)
    // console.log(strArr)

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < englishAlphabet.length - k; j++) {
            if (strArr[i] === englishAlphabet[j]) {

                strArr[i] = englishAlphabet[j + k]
                // console.log(strArr[i])
                break;

            }
        }

    }

    console.log(strArr)
}

str = "xyz" // output ="zab"

encryptor(str)