import styled from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

type Props = {
  $active: boolean
}

export const AsideUserContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 35%;
  z-index: 1;
  background-color: ${Colors.verdeClaro};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  justify-content: space-between;

  .Close {
    font-family: ${Fonts.Inter};
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    color: ${Colors.verdeEscuro};
    font-weight: bold;
    width: 20px;
    height: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 12px;

    button {
      width: 100%;
    }
  }
  @media (max-width: ${BreakPoint.tablet}) {
    width: 50%;
  }
  @media (max-width: ${BreakPoint.mobile}) {
    width: 80%;
  }
`

export const Overlay = styled.dialog<Props>`
  display: ${({ $active }) => ($active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  form {
    width: 80%;
  }
`
