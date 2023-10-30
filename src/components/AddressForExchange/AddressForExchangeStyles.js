import styled from 'styled-components'
import { textStyles } from '../../styles/fonts'

export const Text = styled.p`
  ${textStyles};
  font-weight: 400;
  font-size: 16px;
  padding: 8px 0;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
  }
`
