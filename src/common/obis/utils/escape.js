export { htmlEscape, htmlUnescape, ofxEscape, csvEscape, qifEscape }

function htmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim()
}

function htmlUnescape(str) {
  return String(str)
    .replace(/&amp;/gi, '&')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .trim()
}

function ofxEscape(str) {
  return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').trim()
}

function csvEscape(str) {
  return String(str)
    .replace(/"/g, '""')
    .replace(/\r\n|\r|\n/g, ' ')
    .trim()
}

function qifEscape(str) {
  return String(str)
    .replace(/\r\n|\r|\n/g, ' ')
    .trim()
}
