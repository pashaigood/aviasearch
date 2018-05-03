import fecha from 'fecha'
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

fecha.i18n = {
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  amPm: ['', ''],
  DoFn: function (D) {
    return D
  }
}

function date (source) {
  const date = fecha.parse(source, 'DD.MM.YY')
  return fecha.format(date, 'D MMM YYYY, ddd')
}
