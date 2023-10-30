import { useState } from 'react'
import { StyledInput } from './InputStyles'

function Input({ onValueChange, defaultValue = '' }) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (event) => {
    setValue(event.target.value)
    onValueChange(event.target.value)
  }

  return <StyledInput value={value} onChange={handleChange} />
}

export default Input
