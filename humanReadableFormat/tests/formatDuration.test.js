const { formatDuration } = require("../src/formatDuration")

test('formatDuration(1) should return "1 second"', () => {
  expect(formatDuration(1)).toBe("1 second")
})

test('formatDuration(62) should return "1 minute and 2 seconds"', () => {
  expect(formatDuration(62)).toBe("1 minute and 2 seconds")
})

test('formatDuration(120) should return "2 minutes"', () => {
  expect(formatDuration(120)).toBe("2 minutes")
})

test('formatDuration(3600) should return "1 hour"', () => {
  expect(formatDuration(3600)).toBe("1 hour")
})

test('formatDuration(3662) should return "1 hour, 1 minute and 2 seconds"', () => {
  expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds")
})

test('formatDuration(0) should return "now"', () => {
  expect(formatDuration(0)).toBe("now")
})

test('formatDuration(31536000) should return "1 year"', () => {
  expect(formatDuration(31536000)).toBe("1 year")
})

test('formatDuration(86400) should return "1 day"', () => {
  expect(formatDuration(86400)).toBe("1 day")
})
