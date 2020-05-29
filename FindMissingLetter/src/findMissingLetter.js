
function findMissingLetter(arr){
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upAlphabet = lowAlphabet.toUpperCase()
    
    const alphabet = arr[0] === arr[0].toLowerCase() ? lowAlphabet : upAlphabet
    
    const alphabetFirstIndex = alphabet.indexOf(arr[0])

    let missingLetter
    for (let i=0 ; i < arr.length ; i++ ) {

        const currentCheckingLetter = arr[i]
        const currentCorrectLetter = alphabet[alphabetFirstIndex + i]

        if( currentCorrectLetter !==  currentCheckingLetter ) {
            missingLetter = currentCorrectLetter
            break
        }  
    }
    
    return missingLetter
}


module.exports = findMissingLetter
