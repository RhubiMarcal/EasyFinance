import { useState } from 'react'
import { Container, TitlePrimary } from '../../styles'
import { HamburgerButton, HeaderContainer } from './styles'

type props = {
  page: 'landingPage' | 'MainPage'
}

const Header = ({ page }: props) => {
  const [navActive, setNavActive] = useState(false)

  return (
    <HeaderContainer page={page} navActive={navActive}>
      <Container>
        <div>
          <TitlePrimary>EasyFinance</TitlePrimary>
          <HamburgerButton
            size={page === 'landingPage' ? 'small' : 'big'}
            onClick={() => setNavActive(!navActive)}
          >
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
      <hr />
    </HeaderContainer>
  )
}

export default Header
