import styled from 'styled-components'
import { Colors } from '../../styles'

type Props = {
  progress: number
  color: 'green' | 'darkBlue'
}

export const ProgressBarContainer = styled.div<Props>`
  background-color: ${({ color }) =>
    color == 'green' ? Colors.verdeEscuro : Colors.brancoEscuro};
  position: relative;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  div {
    border-radius: 5px;
    background-color: ${Colors.azulEscuro};
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
  }
  p {
    color: ${Colors.brancoEscuro};
    position: absolute;
    right: 3px;
    font-size: 22px;
  }
`
