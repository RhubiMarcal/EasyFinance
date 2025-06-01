import { styled } from 'styled-components'
import { Colors, BreakPoint } from '../../styles'

export const ModelSectionsContainer = styled.section`
  padding-top: 40px;
  background-color: ${Colors.verdeClaro};
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
  &:nth-child(2n) {
    background-color: ${Colors.brancoEscuro};

    > div {
      flex-direction: row-reverse;
      text-align: right;
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    > div {
      img {
        display: none;
      }

      > div h2 {
        text-align: center;
        font-size: 40px;
      }
    }
    padding-bottom: 40px;
    text-align: justify;

    &:nth-child(2n) {
      > div {
        flex-direction: row;
        text-align: justify;
      }
    }
  }
`
