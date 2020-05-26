const {pigIt} = require('../main')

test("Pig latin is cool should equal igPay atinlay siay oolcay", () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
})


test("This is my string should equal hisTay siay ymay tringsay ", () => {
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay')
})
