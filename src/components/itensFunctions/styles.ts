import styled from 'styled-components'
import { BreakPoint, Colors, Fonts } from '../../styles'

export const ContainerItenHistorico = styled.li`
  display: flex;
  padding: 20px;
  max-height: 150px;
  background-color: ${Colors.cinzaClaro};
  border-radius: 20px;
  position: relative;
  gap: 4%;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > img {
    width: 110px;
    height: 110px;
    object-fit: cover;
  }

  p,
  b,
  span {
    font-family: ${Fonts.Markazi};
  }

  p {
    font-size: 32px;
    line-height: 1;
    font-weight: bold;
  }

  b {
    color: ${Colors.cinzaEscuro};
    font-size: 28px;
    line-height: 1;
  }

  span {
    color: ${Colors.cinzaEscuro};
    font-size: 28px;
    line-height: 1;
  }

  > button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: ${BreakPoint.mobile}) {
    > button {
      bottom: 10px;
      right: 10px;
    }

    p {
      font-size: 24px;
    }

    b {
      font-size: 22px;
      text-transform: capitalize;
    }

    span {
      font-size: 22px;
    }

    > img {
      width: 64px;
      height: 64px;
    }
  }
`

export const ContainerItenMetas = styled.li``

export const ContainerItenLimite = styled.li``
