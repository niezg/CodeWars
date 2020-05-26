//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    return str.split(' ').map(word => {

        if (word.toLowerCase() == word.toUpperCase()) 
        return word

        const letters = word.split('')
        const firstLetter = letters.shift()
        
        return [...letters, firstLetter, "ay"].join('')
    }).join(' ')
  }

  exports.pigIt = pigIt
