const removeDuplicates = require("../src/removeDuplicates")

test('removeDuplicates(["a","b","c","d","b"]) should remove all duplicate', () => {
  expect(removeDuplicates(["a", "b", "c", "d", "b"])).toBe(["a", "b", "c", "d"])
})
