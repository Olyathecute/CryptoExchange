import { Wrapper, Text } from './CurrencyLabelStyles'

const defaultImg = '/CryptoExchange/images/btc.svg'

function CurrencyLabel({ image, ticker = 'coin', name }) {
  return (
    <Wrapper>
      <img src={image || defaultImg} alt={ticker} />
      <Text $dark title={ticker.toUpperCase()}>
        {ticker}
      </Text>
      {name && <Text>{name}</Text>}
    </Wrapper>
  )
}

export default CurrencyLabel
