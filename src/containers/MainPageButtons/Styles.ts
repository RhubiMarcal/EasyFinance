import { styled } from 'styled-components'
import { Colors, Fonts } from '../../styles'

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
      }
    }

    &:last-child {
      padding-block: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      button {
        font-size: 48px;
        padding: 80px 50px;
      }
    }
  }

  hr {
    border: 2px solid ${Colors.verdeEscuro};
  }
`
