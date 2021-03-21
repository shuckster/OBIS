import { convertCentsToDecimal } from '@/obis/utils/currency'

export function makeGenerator() {
  return {
    id: 'JSON',
    folder: 'json',
    extension: 'json',
    description: 'JSON (JavaScript Object Notation)',

    generate: statement =>
      JSON.stringify(
        statement,
        (key, replacementValue) => {
          if (-1 !== ['debit', 'credit', 'balance'].indexOf(key)) {
            const float = parseFloat(convertCentsToDecimal(replacementValue))

            if (isNaN(float)) {
              return 'balance' === key ? undefined : 0
            } else {
              return float
            }
          }

          return replacementValue
        },
        2
      )
  }
}
