import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getMinimalExchangeAmount, getEstimatedExchangeAmount } from '../../requests'
import AddressForExchange from '../../components/AddressForExchange'
import CurrencyBlock from '../../components/CurrencyBlock'
import { Title, Subtitle, Container, TitleGroup, InputGroup, Swap } from './MainStyles'
import Loader from '../../components/Loader'

function Main({ data }) {
  const [leftCurrency, setLeftCurrency] = useState(null)
  const [leftAmount, setLeftAmount] = useState('')
  const [rightCurrency, setRightCurrency] = useState(null)
  const [rightAmount, setRightAmount] = useState('')

  const [inputWasChanged, setInputWasChanged] = useState(null)

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const currenciesAreSet = Boolean(leftCurrency && rightCurrency)

  // called when both coins are chosen -> receiving the minimum exchange (left input)
  const {
    isFetching,
    data: minimumAmount,
    error: minimumAmountError,
  } = useQuery({
    queryKey: [
      'minimumExchangeAmount',
      leftCurrency?.ticker,
      leftCurrency?.network,
      rightCurrency?.ticker,
      rightCurrency?.network,
    ],
    queryFn: () =>
      getMinimalExchangeAmount(leftCurrency.ticker, leftCurrency.network, rightCurrency.ticker, rightCurrency.network),
    retry: 2,
    enabled: currenciesAreSet,
  })

  useEffect(() => minimumAmountError && setErrorMessage(minimumAmountError.response.data.message), [minimumAmountError])

  useEffect(() => {
    setLeftAmount(minimumAmount)
    setInputWasChanged('left')
  }, [minimumAmount])

  const performFetch = async (fetchData) => {
    setErrorMessage(null)
    setIsLoading(true)

    await fetchData()

    setIsLoading(false)
    setInputWasChanged(null)
  }

  // called when both coins are chosen and minimum exchange got or changed -> receiving estimated (right input)
  useEffect(() => {
    if (!currenciesAreSet || !leftAmount) return

    if (inputWasChanged === 'left') {
      const fetchData = async () => {
        try {
          const result = await getEstimatedExchangeAmount(
            leftCurrency.ticker,
            leftCurrency.network,
            rightCurrency.ticker,
            rightCurrency.network,
            leftAmount
          )
          setRightAmount(result)
        } catch (error) {
          setErrorMessage(error.response.data.message)
          setRightAmount('-')
        }
      }

      performFetch(fetchData)
    }
  }, [leftCurrency, rightCurrency, leftAmount, inputWasChanged, minimumAmount, currenciesAreSet])

  // called when estimated changed -> receiving exchange (left input)
  useEffect(() => {
    if (!currenciesAreSet || !rightAmount) return

    if (inputWasChanged === 'right') {
      const fetchData = async () => {
        try {
          const result = await getEstimatedExchangeAmount(
            rightCurrency.ticker,
            rightCurrency.network,
            leftCurrency.ticker,
            leftCurrency.network,
            rightAmount
          )
          setLeftAmount(result)
        } catch (error) {
          setErrorMessage(error.response.data.message)
        }
      }

      performFetch(fetchData)
    }
  }, [leftCurrency, rightCurrency, rightAmount, inputWasChanged, currenciesAreSet])

  return (
    <Container>
      <TitleGroup>
        <Title>Crypto Exchange</Title>
        <Subtitle>Exchange fast and easy</Subtitle>
      </TitleGroup>

      <InputGroup>
        <CurrencyBlock
          inputName='left'
          currencies={data}
          setAmount={setLeftAmount}
          amount={leftAmount}
          selectedCurrency={leftCurrency}
          setSelectedCurrency={setLeftCurrency}
          trigger={setInputWasChanged}
          inputDisable={!currenciesAreSet}
        />
        {isLoading || isFetching ? <Loader size='small' /> : <Swap src='/CryptoExchange/images/swap.svg' alt='' />}
        <CurrencyBlock
          inputName='right'
          currencies={data}
          setAmount={setRightAmount}
          amount={rightAmount}
          selectedCurrency={rightCurrency}
          setSelectedCurrency={setRightCurrency}
          trigger={setInputWasChanged}
          inputDisable={!currenciesAreSet}
        />
      </InputGroup>

      <AddressForExchange leftAmount={leftAmount} rightAmount={rightAmount} errorMessage={errorMessage} />
    </Container>
  )
}

export default Main
