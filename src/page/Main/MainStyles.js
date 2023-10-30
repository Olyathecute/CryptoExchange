import styled from 'styled-components'
import { textStyles } from '../../styles/fonts'

export const Title = styled.h1`
  ${textStyles};
  font-weight: 300;
  font-size: 50px;
`

export const Subtitle = styled.p`
  ${textStyles};
  font-weight: 400;
  font-size: 20px;
`

export const Text = styled.p`
  ${textStyles};
  font-weight: 400;
  font-size: 16px;
  padding: 8px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputGroup = styled.div`
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

export const Swap = styled.img`
  @media (max-width: 1000px) {
    transform: rotate(90deg);
  }
`
