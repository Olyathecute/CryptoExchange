import styled from 'styled-components'
import { blackColor, blueGreyColor } from '../../styles/colors'
import { fontFamily } from '../../styles/fonts'

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20px 45px minmax(0px, 1fr);
  gap: 12px;
`

export const Text = styled.p`
  color: ${(props) => (props.$dark ? blackColor : blueGreyColor)};
  text-transform: ${(props) => (props.$dark ? 'upperCase' : '')};
  font-family: ${fontFamily};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
