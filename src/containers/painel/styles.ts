import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const PainelContainer = styled.section`
  background-color: ${Colors.azulEscuro};
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  h2 {
    color: ${Colors.brancoEscuro};
    font-size: 48px;
    font-family: ${Fonts.Jomhuria};
    font-weight: lighter;
  }
`
