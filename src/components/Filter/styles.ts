import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const FilterContainer = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    input,
    select {
      border: none;
      background-color: ${Colors.brancoEscuro};
      border-radius: 50px;
      padding: 0 8px;
      font-size: 22px;
    }

    label {
      display: flex;
      gap: 12px;

      p {
        font-family: ${Fonts.Jomhuria};
        color: ${Colors.brancoEscuro};
        text-align: left;
        font-size: 32px;
        transform: translateY(0.1rem);
      }
    }
  }
`
