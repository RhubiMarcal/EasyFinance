import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const GraficosContainer = styled.section`
  background-color: ${Colors.azulEscuro};
  > div {
    > nav {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid ${Colors.brancoEscuro};

      button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        img {
          width: 20px;
          height: 20px;
        }
      }

      h2 {
        color: ${Colors.brancoEscuro};
      }
    }
    > div {
      padding-block: 30px;
      display: flex;
      flex-direction: column;
      gap: 25px;

      > div > div {
        gap: 12px;
      }

      .inputDiv {
        display: flex;
        align-items: center;
        gap: 5px;

        label {
          font-family: ${Fonts.Jomhuria};
          color: ${Colors.azulEscuro};
          text-align: left;
          font-size: 28px;
        }

        input,
        select {
          border: none;
          background-color: ${Colors.cinzaClaro};
          border-radius: 50px;
          padding: 8px 16px;
          font-size: 22px;
        }
      }
    }
  }
`
