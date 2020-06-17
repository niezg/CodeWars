const { proto } = require("../src/nestingStructure")
//Array.prototype = proto

test("Array prototype sameStructureAs should return true", () => {
  expect([[]].sameStructureAs([[]])).toBe(true)
  expect([[], 3].sameStructureAs([[], 5])).toBe(true)
  expect([[], 3, 3].sameStructureAs([[], 5, 8])).toBe(true)
  expect([[], 3, [[]], 3].sameStructureAs([[], 5, [[]], 8])).toBe(true)
})

test("Array prototype sameStructureAs should return false", () => {
  expect([[], []].sameStructureAs([[]])).toBe(false)
  expect([[3], 3].sameStructureAs([[], 5])).toBe(false)
  expect([[], 3, 3].sameStructureAs([[], 5])).toBe(false)
  expect([[], 3, []].sameStructureAs([[], [], 8])).toBe(false)
})
