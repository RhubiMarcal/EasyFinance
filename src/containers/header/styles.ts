import styled from 'styled-components'
import { Colors, BreakPoint } from '../../styles'

type Props = {
  navActive: boolean
  page: 'landingPage' | 'MainPage'
}

export const HeaderContainer = styled.header<Props>`
  background-color: ${Colors.azulEscuro};
  padding-block: 15px;
  ${({ page }) =>
    page == 'landingPage' &&
    `
    position: sticky;
    top: 0;
    z-index: 2;
  `}

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: ${({ page }) => (page === 'MainPage' ? 'none' : 'flex')};
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
      flex-direction: ${({ page }) =>
        page === 'MainPage' ? 'row-reverse' : 'row'};
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }

  hr {
    display: ${({ page }) => (page == 'MainPage' ? 'block' : 'none')};
    width: 100vw;
    margin-top: 15px;
    border: 1px solid ${Colors.verdeEscuro};
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

export const HamburgerButton = styled.div<{ size: 'big' | 'small' }>`
  display: ${({ size }) => (size === 'big' ? 'flex' : 'none')};
  flex-direction: column;
  gap: 7px;
  height: 100%;
  cursor: pointer;

  span {
    width: calc((2px * 3) + (7px * 2) + 7px);
    height: 2px;
    background-color: ${Colors.cinzaClaro};
  }
  @media (max-width: ${BreakPoint.tablet}) {
    display: flex;
  }
`
