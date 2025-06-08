import styled from 'styled-components'
import { Colors, Fonts, BreakPoint } from '../../styles'

type props = {
  color: 'green' | 'darkBlue' | 'image' | 'gray' | 'red'
  image?: string
  size: 'big' | 'small'
}

export const ButtonContainer = styled.button<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 50px;
  padding: ${({ size }) => (size == 'small' ? '10px 50px' : '15px 40px')};
  ${({ color, image }) =>
    color === 'image' && image
      ? `background-image: url(${image});`
      : `background-color: ${
          color === 'darkBlue'
            ? Colors.azulEscuro
            : color === 'green'
            ? Colors.verdeEscuro
            : color === 'gray'
            ? Colors.cinzaClaro
            : color === 'red'
            ? Colors.red
            : 'trasparent'
        };`}
  background-size: cover;
  border: none;
  font-family: ${({ image }) => (image ? Fonts.Jomhuria : Fonts.Markazi)};
  text-transform: uppercase;
  color: ${({ color }) =>
    color == 'gray' ? Colors.verdeEscuro : Colors.brancoEscuro};
  font-size: ${({ size }) => (size == 'small' ? '24px' : '22px')};
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  font-weight: ${({ size }) => (size == 'big' ? 'bold' : 'normal')};

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${BreakPoint.mobile}) {
    padding: 12px 24px;
  }
`
