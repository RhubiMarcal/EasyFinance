import { styled } from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const WarningContainer = styled.section`
  background-color: ${Colors.brancoEscuro};
  padding: 12px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: ${Fonts.Jomhuria};
    font-size: 32px;
    color: ${Colors.red};
  }
  img {
    width: 80px;
  }
`
