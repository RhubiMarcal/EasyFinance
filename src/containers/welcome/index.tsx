import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/img/dollar (1).gif'
import { useGetMeQuery } from '../../service/api'

const Welcome = () => {
  const { data } = useGetMeQuery()

  return (
    <WelcomeContainer>
      <Container>
        <h1>
          Bem-Vindo (a) <span>{data?.name}</span>
        </h1>
        <img src={dollar} alt="dollar" />
      </Container>
    </WelcomeContainer>
  )
}

export default Welcome
