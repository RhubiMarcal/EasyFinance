import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${Colors.azulEscuro};
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${Colors.brancoEscuro};
      font-family: 'Jomhuria', cursive;
      display: flex;
      justify-content: flex-start;
      font-size: 48px;
      font-weight: lighter;
    }

    nav {
      display: flex;
      gap: 120px;

      a {
        text-decoration: none;
        color: ${Colors.brancoEscuro};
        font-family: 'Jomhuria', cursive;
        font-weight: lighter;
        font-size: 32px;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.1);
          transition: all 0.3s;
        }
      }
    }
  }
`
