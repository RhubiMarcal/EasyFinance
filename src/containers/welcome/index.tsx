import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/gif/principal.gif'
import { useGetMeQuery } from '../../service/api'
import Loader from '../../components/Loader'

const Welcome = () => {
  const { data, isLoading } = useGetMeQuery()

  return (
    <WelcomeContainer>
      <Container>
        <h1>
          Bem-Vindo (a) <span>{data?.name}</span>
        </h1>
        <img src={dollar} alt="dollar" />
      </Container>
      <Loader type="padrao" active={isLoading} />
    </WelcomeContainer>
  )
}

export default Welcome
