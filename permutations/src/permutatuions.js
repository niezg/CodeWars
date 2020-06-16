const permutations = function (string) {
  const getAllPossiblePair = (rest) => {
    const possiblePair = []
    if (rest.length < 2)
      return [
        {
          letters: rest,
          rest: "",
        },
      ]
    for (let i = 0; i < rest.length; ++i) {
      const letters = rest[i]
      const newRest = rest.split("")
      newRest.splice(i, 1)
      possiblePair.push({
        letters,
        rest: newRest.join(""),
      })
    }

    return possiblePair
  }

  let permutations = getAllPossiblePair(string)

  while (permutations[0].rest !== "") {
    const newPermutations = []

    permutations.forEach((i) => {
      const newPairs = getAllPossiblePair(i.rest)
      const prevLetters = i.letters

      newPairs.forEach((j) => {
        newPermutations.push({ letters: prevLetters + j.letters, rest: j.rest })
      })
    })

    permutations = newPermutations
  }

  return [...new Set(permutations.map((i) => i.letters))]
}

exports.permutations = permutations
