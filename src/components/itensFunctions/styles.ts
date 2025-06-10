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

export const ContainerItenLimite = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background-color: ${Colors.cinzaClaro};
  border: 3px solid ${Colors.verdeEscuro};
  border-radius: 25px;
  padding: 22px;
  position: relative;

  > div:first-child {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    img {
      width: 100px;
      height: 100px;
    }
    > div {
      > p {
        font-size: 48px;
        font-family: ${Fonts.Jomhuria};
      }
    }
  }

  @media (max-width: ${BreakPoint.mobile}) {
    padding-bottom: 80px;
    > button:first-of-type {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }
  }
`

export const ContainerItenMetas = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background-color: ${Colors.cinzaClaro};
  border-radius: 25px;
  padding: 22px;
  position: relative;

  > div:first-child {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    img {
      width: 100px;
      height: 100px;
    }
    > div {
      > p {
        font-size: 48px;
        font-family: ${Fonts.Jomhuria};
      }
    }
  }
`

export const ButtonEdit = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
