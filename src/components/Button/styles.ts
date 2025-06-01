import styled from 'styled-components'
import { Colors, Fonts, BreakPoint } from '../../styles'

type props = {
  color: 'green' | 'black'
}

export const ButtonContainer = styled.button<props>`
  border-radius: 50px;
  padding: 5px 50px;
  background-color: ${({ color }) =>
    color == 'black' ? '#000' : Colors.verdeEscuro};
  border: none;
  font-family: ${Fonts.Jomhuria};
  text-transform: uppercase;
  color: ${Colors.brancoEscuro};
  font-size: 24px;

  @media (max-width: ${BreakPoint.mobile}) {
    padding: 12px 24px;
  }
`
