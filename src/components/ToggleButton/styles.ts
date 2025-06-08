import { styled } from 'styled-components'
import { BreakPoint, Colors } from '../../styles'

export const ToggleButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${Colors.azulClaro};
  border-radius: 20px;
  padding: 7px;
  position: relative;

  button {
    color: ${Colors.brancoEscuro};
    background-color: transparent;
    border: none;
    padding: 5px 60px;
    z-index: 1;
    cursor: pointer;
    font-size: 20px;
  }

  div {
    background-color: ${Colors.azulEscuro};
    border-radius: 16px;
    width: calc((100% - 14px) / 2);
    height: calc(100% - 14px);
    position: absolute;
    left: 7px;
    top: 7px;
    transform: translateX(0%);

    @keyframes sliderDireita {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(100%);
      }
    }
    @keyframes sliderEsquerda {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
    &.direita {
      animation: sliderDireita 0.5s forwards;
    }
    &.esquerda {
      animation: sliderEsquerda 0.5s forwards;
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    width: 100%;
    button {
      padding: 5px 2px;
    }
  }
`
