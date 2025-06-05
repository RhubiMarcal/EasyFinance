import { useState } from 'react'
import { Container, TitlePrimary } from '../../styles'
import { HamburgerButton, HeaderContainer } from './styles'
import AsideUser from '../../components/AsideUser'

type props = {
  page: 'landingPage' | 'MainPage'
}

const Header = ({ page }: props) => {
  const [navActive, setNavActive] = useState(false)
  const [asideActive, setAsideActive] = useState(false)

  return (
    <HeaderContainer page={page} navActive={navActive}>
      <Container>
        <div>
          <TitlePrimary>EasyFinance</TitlePrimary>
          <HamburgerButton
            size={page === 'landingPage' ? 'small' : 'big'}
            onClick={
              page === 'landingPage'
                ? () => setNavActive(!navActive)
                : () => setAsideActive(!asideActive)
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </div>
        <nav>
          <a href="#Home">Home</a>
          <a href="#Objetivos">Objetivos</a>
          <a href="#Funcionalidades">Funcionalidades</a>
        </nav>
      </Container>
      <hr />
      <AsideUser onClose={() => setAsideActive(false)} active={asideActive} />
    </HeaderContainer>
  )
}

export default Header
