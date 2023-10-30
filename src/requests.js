import axios from 'axios'

const API_KEY = 'c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd'

const instance = axios.create({
  baseURL: 'https://api.changenow.io/v2/exchange',
  headers: {
    'x-changenow-api-key': API_KEY,
  },
})

export const getListOfAvailableCurrencies = () => instance.get('/currencies').then((response) => response.data)

export const getMinimalExchangeAmount = (fromCurrency, fromNetwork, toCurrency, toNetwork) =>
  instance
    .get('/min-amount', {
      params: {
        fromCurrency,
        fromNetwork,
        toCurrency,
        toNetwork,
      },
    })
    .then((response) => response.data.minAmount)

export const getEstimatedExchangeAmount = (fromCurrency, fromNetwork, toCurrency, toNetwork, amount) =>
  instance
    .get('/estimated-amount', {
      params: {
        fromCurrency,
        fromNetwork,
        toCurrency,
        toNetwork,
        type: 'direct',
        fromAmount: Number(amount),
        flow: 'standard',
      },
    })
    .then((response) => response.data.toAmount)
