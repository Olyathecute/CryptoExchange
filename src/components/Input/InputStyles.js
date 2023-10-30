import styled from 'styled-components'
import { lightGreyColor, blackColor, mediumGreyColor } from '../../styles/colors'
import { fontFamily } from '../../styles/fonts'

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  outline: none;

  background-color: ${lightGreyColor};
  border-radius: 5px;
  border: 1px solid ${mediumGreyColor};
  padding: 15px;

  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: ${blackColor};

  flex: 3;

  @media (max-width: 1000px) {
    width: 370px;
    flex: none;
  }
`
