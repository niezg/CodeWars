const { permutations } = require("../src/permutatuions")

test("function permutatuions should return all non duplicate permutations", () => {
  expect(permutations("a")).toStrictEqual(["a"])
  expect(permutations("ab")).toStrictEqual(["ab", "ba"])
  expect(permutations("abab").sort()).toStrictEqual(
    ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort()
  )
})
