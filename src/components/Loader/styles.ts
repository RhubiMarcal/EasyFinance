import styled from 'styled-components'
import { Colors } from '../../styles'

export const LoaderContainer = styled.div`
  display: flex;
  color: ${Colors.verdeClaro};
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: ${Colors.verdeClaro};
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 5;
`
