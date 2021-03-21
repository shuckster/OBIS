export {
  USDateTimeString,
  UKDateTimeString,
  simpleDate,
  dateTimeString,
  zeroPad
}

function USDateTimeString(timestampOrDate) {
  const date = new Date(timestampOrDate)
  return String(
    zeroPad(date.getMonth() + 1) +
      '/' +
      zeroPad(date.getDate()) +
      '/' +
      date.getFullYear()
  )
}

function UKDateTimeString(timestampOrDate) {
  const date = new Date(timestampOrDate)
  return String(
    zeroPad(date.getDate()) +
      '/' +
      zeroPad(date.getMonth() + 1) +
      '/' +
      date.getFullYear()
  )
}

function simpleDate(timestampOrDate) {
  const date = new Date(timestampOrDate)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return String(
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
  )
}

function dateTimeString(timestampOrDate, delim = '') {
  const date = new Date(timestampOrDate)
  return [
    date.getFullYear(),
    zeroPad(date.getMonth() + 1),
    zeroPad(date.getDate()),
    zeroPad(date.getHours()),
    zeroPad(date.getMinutes()),
    zeroPad(date.getSeconds())
  ].join(delim)
}

function zeroPad(num) {
  if (num < 10) {
    return '0' + num
  }
  return '' + num
}
