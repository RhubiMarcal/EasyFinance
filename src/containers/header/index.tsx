import { Container } from '../../styles'
import { HeaderContainer } from './styles'

const Header = () => (
  <HeaderContainer>
    <Container>
      <h3>EasyFinance</h3>
      <nav>
        <a href="#hero">Home</a>
        <a href="#principal">Objetivos</a>
        <a href="#funcionalidades">Funcionalidades</a>
      </nav>
    </Container>
  </HeaderContainer>
)

export default Header
