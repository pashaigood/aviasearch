import Currency from 'dtos/Currency'

export const Values = {
  USD: 'USD',
  EUR: 'EUR',
  RUB: 'RUB'
}

/**
 * @type {Object<string, CurrencyDTO>}
 */
export default {
  [Values.RUB]: new Currency({name: Values.RUB, rate: 1}),
  [Values.USD]: new Currency({name: Values.USD, rate: 1/63}),
  [Values.EUR]: new Currency({name: Values.EUR, rate: 1/74})
}
