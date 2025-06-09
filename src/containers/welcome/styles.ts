import { styled } from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

export const WelcomeContainer = styled.section`
  background-color: ${Colors.azulEscuro};
  padding: 50px 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
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
        width: 90px;
      }
      @media (max-width: ${BreakPoint.mobile}) {
        padding: 20px 0;
        > div {
          align-items: start;
          h1 {
            font-size: 48px;
          }
          .welcome img {
            width: 40px;
          }
        }
      }
    }
  }
`
