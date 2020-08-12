const toRoman = (arabicNumber) => {
  const thousands = ~~(arabicNumber / 1000)
  const hundredths = ~~((arabicNumber - thousands * 1000) / 100)
  const tenths = ~~((arabicNumber - thousands * 1000 - hundredths * 100) / 10)
  const units = arabicNumber - thousands * 1000 - hundredths * 100 - tenths * 10

  const arabicNumbers = [thousands, hundredths, tenths, units]
  const romansSymbols = ["M", "C", "X", "I"]
  const romansFiveSymbols = ["Out of range", "D", "L", "V"]

  return arabicNumbers.reduce((acc, curr, index) => {
    if (curr === 1) {
      return acc + romansSymbols[index]
    }
    if (curr === 2) {
      return acc + romansSymbols[index] + romansSymbols[index]
    }
    if (curr === 3) {
      return (
        acc + romansSymbols[index] + romansSymbols[index] + romansSymbols[index]
      )
    }

    if (curr === 4) {
      return acc + romansSymbols[index] + romansFiveSymbols[index]
    }

    if (curr === 5) {
      return acc + romansFiveSymbols[index]
    }

    if (curr === 6) {
      return acc + romansFiveSymbols[index] + romansSymbols[index]
    }

    if (curr === 7) {
      return (
        acc +
        romansFiveSymbols[index] +
        romansSymbols[index] +
        romansSymbols[index]
      )
    }

    if (curr === 8) {
      return (
        acc +
        romansFiveSymbols[index] +
        romansSymbols[index] +
        romansSymbols[index] +
        romansSymbols[index]
      )
    }
    if (curr === 9) {
      return acc + romansSymbols[index] + romansSymbols[index - 1]
    }

    return acc
  }, "")
}

const fromRoman = (romanNumber) => {
  const weight = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }

  return romanNumber.split("").reduce((acc, curr, index, arr) => {
    if (arr.length - 1 === index) {
      return acc + weight[curr]
    }
    if (weight[curr] < weight[arr[index + 1]]) {
      return acc - weight[curr]
    }

    return acc + weight[curr]
  }, 0)
}

const RomanNumerals = {
  toRoman,
  fromRoman,
}

module.exports = RomanNumerals
