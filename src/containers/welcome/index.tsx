import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/gif/principal.gif'
import { useGetMeQuery } from '../../service/Hooks/userAPI'
import Loader from '../../components/Loader'

const Welcome = () => {
  const { data: userData, isLoading } = useGetMeQuery()

  return (
    <>
      <WelcomeContainer>
        <Container>
          <h1>
            Bem-Vindo (a) <span>{userData?.name}</span>
          </h1>
          <img src={dollar} alt="dollar" />
        </Container>
        <Loader active={isLoading} type="padrao" />
      </WelcomeContainer>
    </>
  )
}

export default Welcome
