import styled from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

export const FormsContainer = styled.form<{ modal: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 60px;
  background-color: ${Colors.verdeClaro};
  border-radius: 50px;
  gap: 24px;
  width: 100%;
  position: relative;

  h2 {
    text-transform: uppercase;
    height: min-content;
  }

  .inputDiv {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    label {
      font-family: ${Fonts.Jomhuria};
      color: ${Colors.azulEscuro};
      text-align: left;
      font-size: 28px;
    }

    input,
    select {
      border: none;
      background-color: ${Colors.brancoEscuro};
      border-radius: 50px;
      padding: 8px 16px;
      font-size: 22px;
    }
  }

  .buttons {
    display: flex;
    gap: 16px;
  }
`

export const Overlay = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;

  .Close {
    font-family: ${Fonts.Markazi};
    position: absolute;
    top: 30px;
    right: 60px;
    cursor: pointer;
    color: ${Colors.azulEscuro};
    font-weight: bold;
    font-size: 32px;
  }

  form {
    position: relative;
    width: 50%;
  }
  @media (max-width: ${BreakPoint.tablet}) {
    form {
      width: 80%;
    }
  }
`
