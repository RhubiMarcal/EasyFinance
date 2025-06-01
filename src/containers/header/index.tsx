import { useState } from 'react'
import { Container, TitlePrimary } from '../../styles'
import { HamburgerButton, HeaderContainer } from './styles'

const Header = () => {
  const [navActive, setNavActive] = useState(false)

  return (
    <HeaderContainer navActive={navActive}>
      <Container>
        <div>
          <TitlePrimary>EasyFinance</TitlePrimary>
          <HamburgerButton onClick={() => setNavActive(!navActive)}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#principal">Objetivos</a>
          <a href="#funcionalidades">Funcionalidades</a>
        </nav>
      </Container>
    </HeaderContainer>
  )
}

export default Header
