import { styled } from 'styled-components'
import { BreakPoint, Colors } from '../../styles'

export const MainButtonsConainer = styled.section`
  > div {
    &:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20%;
      padding-block: 30px;
      button {
        border-radius: 10px;
        font-size: 32px;
        padding: 25px;
        width: 150px;
      }
    }

    &:last-child {
      padding-block: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: stretch;
      button {
        font-size: 48px;
        padding: 80px 50px;
        height: 260px;
      }
    }
  }

  hr {
    border: 2px solid ${Colors.verdeEscuro};
  }

  @media (max-width: ${BreakPoint.tablet}) {
    > div {
      &:first-child {
        gap: 10%;
        button {
          padding: 15px;
          width: auto;
        }
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > div {
      &:first-child {
        grid-template-columns: 1fr;
        margin-bottom: 30px;
      }
      &:last-child {
        gap: 25px;
        grid-template-columns: 1fr;
        button {
          height: auto;
          padding: 40px 50px;
        }
      }
    }
  }
`
