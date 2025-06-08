import { styled } from 'styled-components'
import backgroundHero from '../../assets/img/backgraundHero.png'
import { BreakPoint } from '../../styles'

export const HeroContainer = styled.section`
  background-image: url(${backgroundHero});
  padding-block: 80px;

  > div {
    display: flex;
    text-align: center;
    gap: 15%;
    color: white;

    > div:first-child {
      margin-top: 15%;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 16px;
      color: white;
      min-height: 400px;
      height: 100%;
      p {
        line-height: 22px;
        font-size: 22px;
      }

      h1 {
        font-size: 72px;
      }
    }

    > div:last-child > div {
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    > div > div {
      &:first-child {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > div > div {
      &:last-child {
        > div {
          padding: 25px 12px;
        }
      }
    }
  }
`
