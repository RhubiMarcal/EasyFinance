import { styled } from 'styled-components'
import { BreakPoint, Colors } from '../../styles'

export const HeaderDashboardContainer = styled.div<{ activeFilter: boolean }>`
  background-color: ${Colors.azulEscuro};
  display: flex;
  align-items: center;
  padding: 20px;

  > div {
    display: flex;
    flex-direction: column;
    h2 {
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > div {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 10px;

      &:last-child {
        margin-top: 20px;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }

    nav {
      width: 100%;
      border-top: 1px solid ${Colors.brancoEscuro};
      overflow: hidden;
      max-height: ${({ activeFilter }) => (activeFilter ? '200px' : '0')};
      animation: ${({ activeFilter }) =>
          activeFilter ? 'slideDown' : 'slideUp'}
        0.5s ease forwards;

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
  .botoes {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 50px;
  }
  .back button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  @media (max-width: ${BreakPoint.mobile}) {
    .botoes {
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      justify-content: center;

      button {
        width: 100%;
        padding: 10px 12px;
      }
    }
  }
`
