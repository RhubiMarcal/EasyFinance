import { styled } from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

export const WelcomeContainer = styled.section`
  background-color: ${Colors.azulEscuro};
  padding: 50px 0;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1,
  span {
    color: ${Colors.brancoEscuro};
    font-family: ${Fonts.Jomhuria};
    font-weight: lighter;
    font-size: 72px;
  }

  span {
    color: ${Colors.verdeEscuro};
    text-transform: capitalize;
  }
  img {
    width: 250px;
  }

  @media (max-width: ${BreakPoint.mobile}) {
    padding: 20px 0;
    > div {
      align-items: start;
      h1 {
        font-size: 48px;
      }
      img {
        width: 130px;
      }
    }
  }
`
