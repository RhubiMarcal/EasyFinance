import styled from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

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

      p,
      span {
        font-family: ${Fonts.Jomhuria};
        color: ${Colors.brancoEscuro};
        text-align: left;
        font-size: 32px;
        transform: translateY(0.1rem);
      }
    }
  }
  @media (max-width: ${BreakPoint.mobile}) {
    flex-direction: column;
    gap: 12px;
    > div {
      align-items: flex-start;
      border-bottom: 1px solid ${Colors.brancoEscuro};
      padding-bottom: 12px;
      > div {
        flex-direction: column;
        > div {
          display: flex;
          align-items: center;
          height: 28px;
          gap: 12px;
        }
      }
      label p {
        display: none;
      }

      label {
        flex-direction: column;
        align-items: flex-start;
      }

      input {
        height: 28px;
      }

      input:disabled {
        opacity: 0.7;
      }
    }
  }
`
