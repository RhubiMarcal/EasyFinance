import { styled } from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

export const WelcomeContainer = styled.section`
  background-color: ${Colors.azulEscuro};
  padding: 25px 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      gap: 16px;
      h1 {
        display: flex;
        flex-direction: column;

        p {
          color: ${Colors.brancoEscuro};
          font-family: ${Fonts.Jomhuria};
          font-size: 48px;
          font-weight: lighter;
        }
        span {
          color: ${Colors.cinzaClaro};
          font-size: 18px;
        }
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
    > div:last-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  }
`
