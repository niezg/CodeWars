const { Calculator } = require("../src/calculator")

test("function evaluate from class Calculator should return value of Expression", () => {
  const calculate = new Calculator()

  expect(calculate.evaluate("127")).toBe(127)
  expect(calculate.evaluate("3+5")).toBe(8)
  expect(calculate.evaluate("4 + 5 * 3")).toBe(19)
  expect(calculate.evaluate("10 + 15 / 3")).toBe(15)
  expect(calculate.evaluate("10 * 5 / 2")).toBe(25)
  expect(calculate.evaluate("10 + 5 - 5")).toBe(10)
  expect(calculate.evaluate("10 + 5 - 5 * 2")).toBe(5)
  expect(calculate.evaluate("(10 + 5 - 5) * 2")).toBe(20)
  expect(calculate.evaluate("((10 + 5) * 3  - 5) * 2")).toBe(80)
  expect(calculate.evaluate("((-10 + 5) * -3  - 5) * 2")).toBe(80)
})
