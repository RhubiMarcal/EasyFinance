import { styled } from 'styled-components'
import { Colors, Fonts, BreakPoint } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Colors.cinzaClaro};
  > div {
    &:first-child {
      display: flex;
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
      justify-content: space-evenly;
      color: ${Colors.brancoEscuro};
      padding-block: 20px;
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
