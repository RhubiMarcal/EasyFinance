import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/img/dollar (1).gif'

const Welcome = () => (
  <WelcomeContainer>
    <Container>
      <h1>
        Bem-Vindo (a) <span>Rhubi Marçal</span>
      </h1>
      <img src={dollar} alt="dollar" />
    </Container>
  </WelcomeContainer>
)
export default Welcome
