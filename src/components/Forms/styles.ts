import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-evenly;
  min-height: 390px;

  h2 {
    text-transform: uppercase;
  }

  .inputDiv {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-family: ${Fonts.Jomhuria};
      color: ${Colors.azulEscuro};
      text-align: left;
      font-size: 28px;
    }

    input {
      border: none;
      background-color: ${Colors.brancoEscuro};
      border-radius: 50px;
      padding: 8px 16px;
    }
  }
`
