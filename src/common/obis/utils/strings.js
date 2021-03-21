export function addSpaces(str, len) {
  if (!str) {
    return ''
  }

  str = '' + str

  while (str.length < len) {
    str = str + ' '
  }

  if (str.length > len) {
    str.length = len
  }

  return str
}
