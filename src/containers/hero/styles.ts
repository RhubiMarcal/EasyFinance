import { styled } from 'styled-components'
import backgroundHero from '../../assets/img/backgraundHero.png'
import { BreakPoint, Colors } from '../../styles'

export const HeroContainer = styled.section<{ formActive: boolean }>`
  background-image: url(${backgroundHero});
  padding-block: 80px;

  > div {
    display: flex;
    text-align: center;
    gap: 15%;
    color: white;

    > div:first-child {
      margin-top: 15%;
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 16px;
      color: white;
      p {
        line-height: 22px;
        font-size: 18px;
      }

      h1 {
        font-size: 72px;
      }
    }

    > div:last-child > div {
      padding: 30px 60px;
      background-color: ${Colors.verdeClaro};
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }
  }

  @media (max-width: ${BreakPoint.tablet}) {
    > div > div {
      &:last-child {
        display: ${({ formActive }) => (formActive ? 'flex' : 'none')};
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        align-items: center;
        justify-content: center;

        > div {
          width: 80%;
        }
      }
      &:first-child {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > div > div {
      &:last-child {
        > div {
          padding: 25px 12px;
        }
      }
    }
  }
`

export const ToggleButton = styled.div`
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
    &.cadastro {
      animation: sliderDireita 0.5s forwards;
    }
    &.login {
      animation: sliderEsquerda 0.5s forwards;
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    button {
      padding: 5px 2px;
    }
  }
`
