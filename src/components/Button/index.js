import { Wrapper, StyledButton, ErrorMessage } from './ButtonStyles'

function Button({ title, onClick, errorMessage, disabled }) {
  return (
    <Wrapper>
      <StyledButton onClick={onClick} disabled={disabled}>
        {title}
      </StyledButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

export default Button
