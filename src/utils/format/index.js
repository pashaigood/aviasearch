import stopQuantityName from './stopQuantityName'

export default {
  stopQuantityName,
  currency,
  date
}

/**
 *
 * @param {number} number
 * @param {CurrencyDTO} currency
 */
function currency (number, currency) {
  return new Intl.NumberFormat('ru-RU', {
    currency: currency.name,
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number * currency.rate)
}

function date (source) {
  const date = new Date(source)
  const locale = "ru-RU"
  return `${date.getDay()} ${date.toLocaleString(locale, { month: "short" }).slice(0, -1)} ${date.getFullYear()}, ${date.toLocaleString(locale, {weekday: 'short'})}`
}
