function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const nonOverlappingIntervals = []
  while (intervals.length !== 1) {
    const firstIntervalStart = intervals[0][0]
    const firstIntervalEnd = intervals[0][1]
    const secondIntervalStart = intervals[1][0]
    const secondIntervalEnd = intervals[1][1]

    if (firstIntervalEnd >= secondIntervalStart) {
      const newIntervalEnd =
        secondIntervalEnd > firstIntervalEnd
          ? secondIntervalEnd
          : firstIntervalEnd

      intervals.splice(0, 2, [firstIntervalStart, newIntervalEnd])
    } else {
      nonOverlappingIntervals.push(intervals.shift())
    }
  }

  nonOverlappingIntervals.push(intervals.shift())

  return nonOverlappingIntervals.reduce((acc, curr) => {
    return acc + curr[1] - curr[0]
  }, 0)
}

module.exports = sumIntervals
