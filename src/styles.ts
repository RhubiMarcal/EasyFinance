import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  azulEscuro: '#063E51',
  azulClaro: '#22586A',
  cinzaClaro: '#C1C1C1',
  brancoEscuro: '#F8FFFD',
  verdeClaro: '#AFCAC2',
  verdeEscuro: '#157C5D'
}

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  html{
    scroll-behavior: smooth;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export default GlobalStyles
