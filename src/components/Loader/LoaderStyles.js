import styled, { keyframes } from 'styled-components'
import { blueColor } from '../../styles/colors'

const sizeTable = {
  small: '24px',
  big: '48px',
}

const move = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

export const StyledLoader = styled.span`
  width: ${(props) => sizeTable[props.size]};
  height: ${(props) => sizeTable[props.size]};
  border: 5px solid ${blueColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${move} 1s linear infinite;
  margin: auto;
`
