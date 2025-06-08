import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/gif/principal.gif'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Welcome = () => {
  const { nome } = useSelector((state: RootReducer) => state.user)

  return (
    <>
      <WelcomeContainer>
        <Container>
          <h1>
            Bem-Vindo (a) <span>{nome}</span>
          </h1>
          <img src={dollar} alt="dollar" />
        </Container>
      </WelcomeContainer>
    </>
  )
}

export default Welcome
