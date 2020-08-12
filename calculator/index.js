var a1 = [91, 2, 10, 66, 99]
var a2 = [8281, 4, 100, 4357, 9801]

function comp(array1, array2) {
  if (array1.length !== array2.length) return false

  return array1.reduce((acc, curr, i, arr) => {
    console.log(i, acc)

    console.log(arr)
    console.log(array2)

    if (acc === false) return false

    const multi = curr * curr
    console.log(multi)

    const indexArr2 = array2.indexOf(multi)
    console.log(indexArr2)

    if (indexArr2 === -1) return false

    arr.splice(i, 1)
    array2.splice(indexArr2, 1)

    return acc
  }, true)
}

console.log(comp(a1, a2))
