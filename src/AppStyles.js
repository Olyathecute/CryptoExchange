import styled from 'styled-components'
import { fontFamily } from './styles/fonts'
import { redColor } from './styles/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 220px;

  @media (max-width: 500px) {
    padding: 16px;
  }
`

export const ErrorMessage = styled.h2`
  color: ${redColor};
  font-family: ${fontFamily};
  font-size: 24px;
  font-weight: 400;
`
