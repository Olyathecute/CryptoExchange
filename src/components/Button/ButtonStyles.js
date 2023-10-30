import styled from 'styled-components'
import { blueColor, darkBlueColor, whiteColor, redColor } from '../../styles/colors'
import { fontFamily } from '../../styles/fonts'

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  @media (max-width: 1000px) {
    width: 370px;
    flex: none;
  }
`

export const StyledButton = styled.button`
  width: 225px;
  height: 50px;
  cursor: pointer;

  background-color: ${blueColor};
  border: none;
  border-radius: 5px;

  color: ${whiteColor};
  font-family: ${fontFamily};
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    background-color: ${darkBlueColor};
  }

  @media (max-width: 1000px) {
    width: 370px;
    flex: none;
  }
`

export const ErrorMessage = styled.p`
  color: ${redColor};
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
`
