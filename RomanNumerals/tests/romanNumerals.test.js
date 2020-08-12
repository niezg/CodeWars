const RomanNumerals = require("../src/romanNumerals")

test("RomanNumerals function should convert arabic numerals to Roman ", function () {
  expect(RomanNumerals.toRoman(1000)).toBe("M")
  expect(RomanNumerals.toRoman(999)).toBe("CMXCIX")
  expect(RomanNumerals.toRoman(4)).toBe("IV")
  expect(RomanNumerals.toRoman(1)).toBe("I")
  expect(RomanNumerals.toRoman(1991)).toBe("MCMXCI")
  expect(RomanNumerals.toRoman(2020)).toBe("MMXX")
  expect(RomanNumerals.toRoman(2008)).toBe("MMVIII")
})

test("RomanNumerals function should convert Roman numerals to arabic ", function () {
  expect(RomanNumerals.fromRoman("M")).toBe(1000)
  expect(RomanNumerals.fromRoman("CMXCIX")).toBe(999)
  expect(RomanNumerals.fromRoman("IV")).toBe(4)
  expect(RomanNumerals.fromRoman("I")).toBe(1)
  expect(RomanNumerals.fromRoman("MCMXCI")).toBe(1991)
  expect(RomanNumerals.fromRoman("MMXX")).toBe(2020)
})
