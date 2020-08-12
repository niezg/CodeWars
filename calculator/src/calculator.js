class Calculator {
  constructor() {
    this.evaluate = (string) => {
      return string
        .split("")
        .reduce(
          (acc, curr, index, arr) => {
            console.log(acc)
            const doesAddSign =
              curr === "." || index === 0 || arr[index - 1] === curr

            if (curr === ")" && acc.bracketCount === 1) {
              if (acc.isNumber2) {
                acc.currNumber2 = this.evaluate(acc.bracketValue)
              } else {
                acc.currNumber1 = this.evaluate(acc.bracketValue)
              }
              acc.bracketValue = ""
            }
            if (curr === ")") {
              acc.bracketCount -= 1
            }

            if (curr === "(") {
              acc.bracketCount += 1
              if (acc.bracketCount === 1) return acc
            }
            if (acc.bracketCount > 0) {
              acc.bracketValue += curr
              return acc
            }

            const lastElement = index === arr.length - 1

            if ((curr === "*" || curr === "/") && !acc.isNumber2) {
              acc.isNumber2 = true
              acc.currSign = curr
              return acc
            }

            if ((!isNaN(curr) || doesAddSign) && acc.isNumber2) {
              acc.currNumber2 += curr
            }

            if ((!isNaN(curr) || doesAddSign) && !acc.isNumber2) {
              acc.currNumber1 += curr
            }

            if (
              (isNaN(curr) || lastElement) &&
              acc.isNumber2 &&
              acc.currSign === "/"
            ) {
              acc.currNumber1 /= acc.currNumber2
              acc.currNumber2 = ""
              acc.currSign = curr
            }

            if (
              (isNaN(curr) || lastElement) &&
              acc.isNumber2 &&
              acc.currSign === "*"
            ) {
              acc.currNumber1 *= acc.currNumber2
              acc.currNumber2 = ""
              acc.currSign = curr
            }

            if (curr === "-" || curr === "+" || lastElement) {
              acc.valueArr.push(parseInt(acc.currNumber1))
              acc.currNumber1 = ""
              if (!lastElement) {
                acc.valueArr.push(curr)
                acc.currSign = curr
                acc.isNumber2 = false
              }
            }

            return acc
          },
          {
            currNumber1: "",
            currNumber2: "",
            isNumber2: false,
            currSign: "",
            valueArr: [],
            bracketCount: 0,
          }
        )
        .valueArr.reduce(
          (acc, curr, index, arr) => {
            const doesAddSign =
              curr === "." || index === 0 || arr[index - 1] === curr
            const lastElement = index === arr.length - 1

            if ((!isNaN(curr) || doesAddSign) && acc.isNumber2) {
              acc.currNumber2 = curr
            }

            if ((!isNaN(curr) || doesAddSign) && !acc.isNumber2) {
              acc.currNumber1 = curr
            }

            if ((curr === "+" || curr === "-") && !acc.isNumber2) {
              acc.isNumber2 = true
              acc.currSign = curr
              return acc
            }

            if (
              (isNaN(curr) || lastElement) &&
              acc.isNumber2 &&
              acc.currSign === "+"
            ) {
              acc.currNumber1 += acc.currNumber2
              acc.currNumber2 = ""
              acc.currSign = curr
            }

            if (
              (isNaN(curr) || lastElement) &&
              acc.isNumber2 &&
              acc.currSign === "-"
            ) {
              acc.currNumber1 -= acc.currNumber2
              acc.currNumber2 = ""
              acc.currSign = curr
            }

            return acc
          },
          { currNumber1: "", currNumber2: "", isNumber2: false, currSign: "" }
        ).currNumber1
    }
  }
}
exports.Calculator = Calculator

/*
return string.split("").reduce(
  (acc, curr) => {
    if (curr === "/") {
    }
    if (curr === "*") {
    }
    if (curr === "+") {
    }
    if (curr === "-") {
    }
  },
  { valueArr: 0 }
)
*/
