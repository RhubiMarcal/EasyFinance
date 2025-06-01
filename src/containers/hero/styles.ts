import { styled } from 'styled-components'
import backgroundHero from '../../assets/img/backgraundHero.png'
import { BreakPoint } from '../../styles'

export const HeroContainer = styled.section`
  background-image: url(${backgroundHero});
  padding-block: 80px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    color: white;

    p {
      line-height: 22px;
      padding-inline: 10%;
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    div {
      p {
        padding: 0;
      }
    }
  }
`
