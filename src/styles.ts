import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  azulEscuro: '#063E51',
  azulClaro: '#22586A',
  cinzaClaro: '#C1C1C1',
  brancoEscuro: '#F8FFFD',
  verdeClaro: '#AFCAC2',
  verdeEscuro: '#157C5D'
}

export const BreakPoint = {
  tablet: '1050px',
  mobile: '684px'
}

export const Fonts = {
  Jomhuria: "'Jomhuria', serif",
  Inter: "'Inter', sans-serif"
}

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: ${Fonts.Inter};
  }

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: ${Colors.brancoEscuro};

    &::-webkit-scrollbar {
      display: none;
    }
  }

  html{
    scroll-behavior: smooth;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${BreakPoint.tablet}) {
    width: 80%;
  }
`

export const TitlePrimary = styled.h1`
  font-size: 48px;
  font-family: ${Fonts.Jomhuria};
  font-weight: lighter;
  color: ${Colors.brancoEscuro};
`

export const TitleSecondary = styled.h2`
  font-size: 48px;
  color: ${Colors.azulEscuro};
  font-family: ${Fonts.Jomhuria};
  font-weight: lighter;
`

export default GlobalStyles
