import styled from 'styled-components'
import { BreakPoint } from '../../styles'

export const ObjetivoContainer = styled.section`
  padding-top: 40px;
  > div {
    p {
      text-align: justify;
      margin-top: 15px;
      padding-inline: 10%;
      line-height: 22px;
    }

    > div {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      img {
        width: 50px;
      }
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    > div {
      h2 {
        font-size: 40px;
      }
      p {
        padding: 0;
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > div {
      h2 {
        text-align: center;
      }
      > div {
        flex-direction: column;
      }
    }
  }
`
