Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) return false

  return this.reduce((acc, thisCurr, index) => {
    if (acc === false) return acc

    const otherCurr = other[index]

    if (typeof thisCurr !== "object" && typeof otherCurr !== "object")
      return true

    if (typeof thisCurr === "object" && typeof otherCurr === "object")
      return thisCurr.sameStructureAs(otherCurr)

    return false
  }, true)
}

exports.proto = Array.prototype
