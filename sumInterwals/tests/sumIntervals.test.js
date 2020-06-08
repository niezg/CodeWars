const sumIntervals = require("../src/sumIntervals")

test("should return the correct sum for non overlapping intervals", function () {
  var test1 = [[1, 5]]
  var test2 = [
    [6, 10],
    [1, 5],
  ]
  expect(sumIntervals(test1)).toBe(4)
  expect(sumIntervals(test2)).toBe(8)
})

test("should return the correct sum for overlapping intervals", function () {
  var test1 = [
    [1, 5],
    [1, 5],
  ]
  var test2 = [
    [1, 4],
    [7, 10],
    [3, 5],
  ]
  expect(sumIntervals(test1)).toBe(4)
  expect(sumIntervals(test2)).toBe(7)
})
