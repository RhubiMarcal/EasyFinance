import { styled } from 'styled-components'
import { Colors, Fonts, BreakPoint } from '../../styles'

export const FooterContainer = styled.footer<{ startNow?: boolean }>`
  background-color: ${Colors.cinzaClaro};
  position: static;
  bottom: 0;
  left: 0;
  width: 100vw;
  > div {
    &:first-child {
      display: ${({ startNow }) => (startNow ? 'flex' : 'none')};
      justify-content: space-between;
      padding-block: 20px;
      h3 {
        font-family: ${Fonts.Jomhuria};
        color: ${Colors.verdeEscuro};
        font-weight: lighter;
        font-size: 48px;
      }
    }
    &:last-child {
      background-color: ${Colors.azulEscuro};
      padding-inline: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${Colors.brancoEscuro};
      padding-block: 20px;
      font-size: 22px;
      span {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > div {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`
