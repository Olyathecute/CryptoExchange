import styled from 'styled-components'
import {
  blackColor,
  lightGreyColor,
  mediumGreyColor,
  darkGreyColor,
  blueGreyColor,
  lightBlueColor,
} from '../../styles/colors'
import { fontFamily } from '../../styles/fonts'

const arrowImg = '/CryptoExchange/images/ArrowDown.svg'
const closeImg = '/CryptoExchange/images/Close.svg'

export const StyledSelect = styled.div`
  position: relative;

  width: 440px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  box-sizing: border-box;
  outline: none;
  padding: 16px;

  background-color: ${lightGreyColor};
  border-radius: 5px;
  border: 1px solid ${mediumGreyColor};

  ${(props) =>
    props.open && {
      border: `1px solid ${mediumGreyColor}`,
      borderColor: darkGreyColor,
      borderBottomColor: mediumGreyColor,
      borderRadius: '5px 5px 0 0',
    }}

  @media (max-width: 1000px) {
    width: 370px;
  }
`

export const StyledOptionList = styled.ul`
  list-style: none;

  position: absolute;
  top: calc(100% + 1px);
  left: -1px;
  right: 0;
  width: 100%;
  height: 204px;
  overflow: auto;

  padding: 0;
  margin: 0;
  background-color: ${lightGreyColor};
  border: 1px solid ${darkGreyColor};
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 1;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export const StyledOption = styled.li`
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background-color: ${lightBlueColor};
  }
`

export const StyledInput = styled.input`
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  border: none;

  width: 100%;

  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: 400;
  color: ${blackColor};

  &::placeholder {
    color: ${blueGreyColor};
  }

  @media (max-width: 1000px) {
    width: 100px;
  }
`

export const Container = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`

export const Line = styled.div`
  background-color: ${mediumGreyColor};
  height: 30px;
  width: 1px;
`

export const Toggle = styled.div`
  width: 16px;
  height: 16px;
  background-image: ${(props) => (props.open ? `url(${closeImg})` : `url(${arrowImg})`)};
  cursor: pointer;
`
