const rangeExtraction = function (list) {
  list.sort((a, b) => a - b).push("")

  return list
    .reduce(
      (acc, curr, index, arr) => {
        if (index === 0) return acc

        const prevNumber = arr[index - 1]
        const continuity = prevNumber + 1 === curr

        if (continuity && !acc.isRangeStarted) {
          acc.isRangeStarted = true
          acc.firstRangeNumber = prevNumber
        }

        if (!continuity && !acc.isRangeStarted) {
          acc.rangeList += `${prevNumber},`
        }

        if (!continuity && acc.isRangeStarted) {
          const separationSign =
            prevNumber - acc.firstRangeNumber === 1 ? "," : "-"
          acc.rangeList += `${acc.firstRangeNumber}${separationSign}${prevNumber},`
          acc.isRangeStarted = false
        }

        return acc
      },
      { isRangeStarted: false, firstRangeNumber: 0, rangeList: "" }
    )
    .rangeList.slice(0, -1)
}

exports.rangeExtraction = rangeExtraction
