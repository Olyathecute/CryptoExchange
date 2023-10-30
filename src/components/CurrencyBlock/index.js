import { useState, useEffect, useRef, useCallback } from 'react'
import CurrencyLabel from '../CurrencyLabel'
import {
  StyledSelect,
  StyledOptionList,
  StyledOption,
  StyledInput,
  Container,
  CurrencyContainer,
  Line,
  Toggle,
} from './CurrencyBlockStyles'

function CurrencyBlock({
  currencies = [],
  amount = '',
  setAmount,
  selectedCurrency,
  setSelectedCurrency,
  inputName,
  trigger,
  inputDisable,
}) {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(amount)

  const [filteredData, setFilteredData] = useState(currencies)

  const handleChange = (event) => {
    const inputValue = event.target.value

    if (isOpen) {
      setValue(inputValue)
      setFilteredData(
        currencies.filter(({ name, ticker }) => {
          const loweredInput = inputValue.toLowerCase()
          return name.toLowerCase().includes(loweredInput) || ticker.includes(loweredInput)
        })
      )
    } else if (!isNaN(Number(inputValue))) setValue(inputValue)
  }

  const changeAmount = () => {
    if (isOpen) return
    setAmount(value)
    trigger(inputName)
  }

  const handleKeyPress = (e) => e.key === 'Enter' && changeAmount()

  const changeOpen = useCallback(
    (nextIsOpen) => {
      setIsOpen(nextIsOpen)
      setValue(nextIsOpen ? '' : amount)
      setFilteredData(currencies)
    },
    [amount, currencies]
  )

  const handleOptionClick = (optionValue) => {
    setSelectedCurrency(optionValue)
    changeOpen(false)
  }

  const toggleDropdown = () => {
    const nextIsOpen = !isOpen
    changeOpen(nextIsOpen)
  }

  const handleClickOutside = useCallback(
    (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) return

      if (isOpen) changeOpen(false)
    },
    [isOpen, changeOpen]
  )

  useEffect(() => setValue(amount), [amount])

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  return (
    <StyledSelect open={isOpen} ref={dropdownRef}>
      <Container>
        <StyledInput
          type='text'
          placeholder={isOpen ? 'Search' : ''}
          value={value}
          onChange={handleChange}
          onBlur={changeAmount}
          onKeyDown={handleKeyPress}
          disabled={isOpen ? false : inputDisable}
        />

        {isOpen ? (
          <Toggle open={isOpen} onClick={toggleDropdown} />
        ) : (
          <>
            <CurrencyContainer onClick={toggleDropdown}>
              <Line />
              <CurrencyLabel image={selectedCurrency?.image} ticker={selectedCurrency?.ticker} />
              <Toggle open={isOpen} />
            </CurrencyContainer>
          </>
        )}
      </Container>

      {isOpen && (
        <StyledOptionList>
          {filteredData.map((option, index) => (
            <StyledOption key={index} onClick={() => handleOptionClick(option)}>
              <CurrencyLabel image={option?.image} name={option?.name} ticker={option?.ticker} />
            </StyledOption>
          ))}
        </StyledOptionList>
      )}
    </StyledSelect>
  )
}

export default CurrencyBlock
