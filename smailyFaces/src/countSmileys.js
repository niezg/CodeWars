/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]
*/

function countSmileys(arr){
    return arr.reduce((acc, curr) =>
    {
        if (curr[0] !== ':' && curr[0] !== ';')
        return acc

        if (curr.length === 3 && (curr[1] === '-' || curr[1] === '~' ) && (curr[2] === ')' || curr[2] === 'D')) 
        return acc + 1
        
        if (curr.length === 2 && (curr[1] === ')' || curr[1] === 'D')) 
        return acc + 1
        
        return acc
    }, 0)
}

exports.countSmileys = countSmileys