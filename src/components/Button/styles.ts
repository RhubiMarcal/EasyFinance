import styled from 'styled-components'
import { Colors, Fonts, BreakPoint } from '../../styles'

type props = {
  color: 'green' | 'darkBlue' | 'image'
  image?: string
}

export const ButtonContainer = styled.button<props>`
  border-radius: 50px;
  padding: 5px 50px;
  ${({ color, image }) =>
    color === 'image' && image
      ? `background-image: url(${image});`
      : `background-color: ${
          color === 'darkBlue'
            ? Colors.azulEscuro
            : color === 'green'
            ? Colors.verdeEscuro
            : 'transparent'
        };`}
  background-size: cover;
  border: none;
  font-family: ${Fonts.Jomhuria};
  text-transform: uppercase;
  color: ${Colors.brancoEscuro};
  font-size: 24px;
  cursor: pointer;

  @media (max-width: ${BreakPoint.mobile}) {
    padding: 12px 24px;
  }
`
