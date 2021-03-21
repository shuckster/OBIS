/* globals obis */

const { SparkMD5 } = obis.deps

export function md5(str) {
  return SparkMD5.hash(str)
}
