import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { Container, Text } from './AddressForExchangeStyles'

function AddressForExchange({ leftAmount, rightAmount, errorMessage }) {
  const [address, setAddress] = useState('')
  const [isSendingCoins, setIsSendingCoins] = useState(false)

  return (
    <div>
      <Text>Your Ethereum address</Text>
      <Container>
        <Input onValueChange={setAddress} defaultValue={address} />
        <Button
          disabled={isSendingCoins}
          title={isSendingCoins ? 'Sending...' : 'Exchange'}
          onClick={() => {
            if (address !== '' && leftAmount && rightAmount) {
              setIsSendingCoins(true)
              setTimeout(() => setIsSendingCoins(false), 1500)
            }
          }}
          errorMessage={errorMessage}
        />
      </Container>
    </div>
  )
}

export default AddressForExchange
