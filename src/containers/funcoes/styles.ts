import { styled } from 'styled-components'
import { Colors, BreakPoint, Fonts } from '../../styles'

export const FuncoesContainer = styled.section`
  padding-block: 40px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    ul {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      gap: 60px;

      li {
        padding: 100px 24px;
        background-color: ${Colors.verdeClaro};
        border-radius: 10px;
        border-top: 4px solid ${Colors.verdeEscuro};
        border-bottom: 4px solid ${Colors.verdeEscuro};
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
          transition: all 0.3s;
        }

        p {
          color: ${Colors.azulEscuro};
          font-family: ${Fonts.Jomhuria};
          font-weight: lighter;
          font-size: 32px;
        }
      }
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    > div {
      h2 {
        font-size: 40px;
        text-align: center;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        font-family: ${Fonts.Jomhuria};
        font-weight: lighter;

        li {
          padding: 12px;
          border: none;
          border-left: 4px solid ${Colors.verdeEscuro};
          border-right: 4px solid ${Colors.verdeEscuro};
        }
      }
    }
  }
`
