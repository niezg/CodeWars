const {countSmileys} = require('../src/countSmileys')

test("countSmileys([':D',':~)',';~D',':)']) should return 4",() =>  {
expect(countSmileys([':D',':~)',';~D',':)'])).toBe(4)
})

test("countSmileys([]) should return 0",() =>  {
    expect( countSmileys([])).toBe(0)
    })

test("countSmileys([]) should return 0",() =>  {
    expect( countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
     })