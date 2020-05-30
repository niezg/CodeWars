const findMissingLetter = require('../src/findMissingLetter')

test('findMissingLetter(["a","b","c","d","f"]) should return "e"', () => {
    expect(findMissingLetter(["a","b","c","d","f"])).toBe('e')
} )

test('findMissingLetter(["O","Q","R","S"]) should return "P"', () => {
    expect(findMissingLetter(["O","Q","R","S"])).toBe('P')
} )