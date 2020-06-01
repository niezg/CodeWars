function formatDuration(seconds) {
  if (seconds == 0) return "now"

  const sInMinute = 60
  const sInHour = sInMinute * 60
  const sInDay = sInHour * 24
  const sInYear = sInDay * 365

  const years = Math.floor(seconds / sInYear)
  seconds -= sInYear * years

  const days = Math.floor(seconds / sInDay)
  seconds -= sInDay * days

  const hours = Math.floor(seconds / sInHour)
  seconds -= sInHour * hours

  const minutes = Math.floor(seconds / sInMinute)
  seconds -= sInMinute * minutes

  const quantityArr = [seconds, minutes, hours, days, years]
  const names = ["second", "minute", "hour", "day", "year"]

  let positon = 0
  return quantityArr.reduce((acc, curr, index) => {
    if (curr === 0) return acc
    else positon += 1

    const phrase = curr + " " + names[index]
    const endName = curr > 1 ? "s" : ""
    const conjunction = positon < 2 ? "" : positon === 2 ? " and " : ", "

    return phrase + endName + conjunction + acc
  }, "")
}

exports.formatDuration = formatDuration
