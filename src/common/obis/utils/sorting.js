export function SortByNumber(field) {
  if (field) {
    return function sortByNumberInObject(a, b) {
      return +a[field] - +b[field]
    }
  } else {
    return function sortByNumber(a, b) {
      return +a - +b
    }
  }
}

export function SortByString(field) {
  if (field) {
    return function sortByStringInObject(a, b) {
      const gt = a[field] > b[field]
      const lt = a[field] < b[field]
      return gt ? 1 : lt ? -1 : 0
    }
  } else {
    return function sortByString(a, b) {
      const gt = a > b
      const lt = a < b
      return gt ? 1 : lt ? -1 : 0
    }
  }
}
