export function getCookie(name) {
  const cookie = document.cookie.split(';').reduce((acc, keyValueStr) => {
    const equalsPos = keyValueStr.indexOf('=')
    const key = keyValueStr.slice(0, equalsPos).trim()
    const value = keyValueStr.slice(equalsPos + 1).trim()
    return {
      ...acc,
      [key]: value
    }
  }, {})

  return cookie[name]
}
