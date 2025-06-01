import styled from 'styled-components'
import { Colors, BreakPoint } from '../../styles'

type Props = {
  navActive: boolean
}

export const HeaderContainer = styled.header<Props>`
  background-color: ${Colors.azulEscuro};
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    padding-top: 20px;

    > div {
      flex-direction: column;

      h1 {
        font-size: 40px;
      }
      nav {
        display: flex;
        justify-content: space-around;
        gap: 0;
        width: 100%;
        border-top: 1px solid #fff;
        padding-top: 8px;
        overflow: hidden;
        max-height: ${({ navActive }) => (navActive ? '200px' : '0')};
        animation: ${({ navActive }) => (navActive ? 'slideDown' : 'slideUp')}
          0.3s ease forwards;

        @keyframes slideDown {
          0% {
            max-height: 0;
            opacity: 0;
          }
          100% {
            max-height: 200px;
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            max-height: 200px;
            opacity: 1;
          }
          100% {
            max-height: 0;
            opacity: 0;
          }
        }
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > div nav a {
      font-size: 20px;
    }
  }
`

export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  height: 100%;

  span {
    width: 15px;
    height: 1px;
    background-color: ${Colors.cinzaClaro};
  }
  @media (max-width: ${BreakPoint.tablet}) {
    display: flex;
  }
`
