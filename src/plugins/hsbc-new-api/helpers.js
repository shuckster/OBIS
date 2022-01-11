import { Just, Maybe, maybeTry } from '@/esm/maybe'

/**
 * Plucks from the HTML:
 *
 *   <div
 *     id="siteConfig"
 *     value='{"countryCode":"GB","groupMemberId":"","globalBusinessGlobalFunction":"","channelId":"","globalChannelId":"","clientId":"","brandId":"","sourceSystemId":"","locale":"en_gb","dateformat":"dd/MM/yyyy","timezone":"GMT","currencyFormat":"GBP","stalertinterval":"60","fatcaFullJourney":"Yes","cdnDomain":"hsbc.co.uk","loadFont":"yes","fraudFeedEnabled":"No"}'
 *   ></div>
 */
const getSiteConfig = () =>
  Maybe.of(document.getElementById('siteConfig'))
    .chain(maybeTry(el => JSON.parse(el.attributes?.value?.value)))
    .orElse(() => Just({}))
    .valueOf()

export const getHeadersFromCfg = (cfg = getSiteConfig()) => ({
  'x-hsbc-channel-id': cfg.channelId,
  'x-hsbc-client-id': cfg.clientId,
  'x-hsbc-source-system-id': cfg.sourceSystemId,
  'x-hsbc-chnl-countrycode': cfg.countryCode,
  'x-hsbc-chnl-group-member': cfg.groupMemberId,
  'x-hsbc-locale': cfg.locale,
  'x-hsbc-gbgf': cfg.globalBusinessGlobalFunction,
  'x-hsbc-global-channel-id': cfg.globalChannelId
})

function* range(start = 0, end = 0) {
  for (let count = start; count <= end; count++) {
    yield count
  }
}

export function calculateTransactionsDateRanges({
  refDate = new Date(),
  yearsBack = 1
} = {}) {
  return [...range(0, yearsBack - 1)]
    .map(yearsBack => {
      const date = new Date(refDate)
      date.setFullYear(date.getFullYear() - yearsBack)
      return date
    })
    .map(date => JanToJan({ refDate: date }))
}

function JanToJan({ refDate = new Date() } = {}) {
  const startDate = new Date(refDate)
  startDate.setMonth(0)

  const endDate = new Date(startDate)
  endDate.setFullYear(endDate.getFullYear() + 1)

  const [transactionStartDate] = startDate.toISOString().split('T')
  const [transactionEndDate] = endDate.toISOString().split('T')

  return {
    transactionStartDate,
    transactionEndDate
  }
}

export function map(pred) {
  return arr => arr.map(pred)
}

export function onlyFulfilled(promiseResults) {
  return promiseResults
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value)
}
