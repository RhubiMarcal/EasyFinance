import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const FuncionModelContainer = styled.section`
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
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  .botoes {
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 50px;
  }
  .adicionar {
    padding: 10px 40px;
    background-color: ${Colors.verdeEscuro};
    border-radius: 40px;
    cursor: pointer;
    span {
      font-family: ${Fonts.Jomhuria};
      font-size: 40px;
      color: white;
      margin-left: 10px;
    }
  }
  .filtrar {
    padding: 10px 40px;
    background-color: ${Colors.cinzaClaro};
    border-radius: 40px;
    cursor: pointer;
    span {
      font-family: ${Fonts.Jomhuria};
      font-size: 40px;
      color: ${Colors.verdeEscuro};
      margin-left: 10px;
    }
  }
`
