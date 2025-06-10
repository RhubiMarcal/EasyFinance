import { styled } from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const BoxMainPageContainer = styled.div<{ type: 'hero' | 'painel' }>`
  background-color: ${Colors.brancoEscuro};
  border-radius: 60px;
  padding: 5px;

  > div {
    background-color: ${Colors.brancoEscuro};
    border: 5px solid
      ${({ type }) =>
        type == 'painel' ? Colors.verdeEscuro : Colors.azulEscuro};
    border-radius: 55px;
    padding: 10px 53px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    ${({ type }) =>
      type == 'painel' &&
      `
      flex-direction: column;
      padding: 20px;
    `}

    h2 {
      font-family: ${Fonts.Jomhuria};
      font-weight: lighter;
      color: ${({ type }) =>
        type == 'hero' ? Colors.verdeEscuro : Colors.azulEscuro};
      font-size: 40px;
      text-align: right;
    }

    .row {
      display: flex;
      justify-content: space-around;
      align-items: baseline;
      gap: 8px;
      align-items: center;
    }

    .col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: 16px;
      align-items: center;
    }

    img {
      width: ${({ type }) => (type == 'painel' ? '30%' : '250px')};
    }
  }
`
