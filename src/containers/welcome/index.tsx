import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/gif/principal.gif'
import { useGetMeQuery } from '../../service/Hooks/userAPI'
import Loader from '../../components/Loader'
import Carteira from '../../assets/img/carteira.png'
import BoxMainPage from '../../components/boxMainPage'
import Warning from '../../components/Warning'
import Button from '../../components/Button'

const Welcome = () => {
  const { data: userData, isLoading } = useGetMeQuery()

  return (
    <>
      <WelcomeContainer>
        <Container>
          <div>
            <h1>
              Olá (a) <span>{userData?.name}</span>
            </h1>
            <img src={dollar} alt="dollar" />
          </div>
          <BoxMainPage type="hero">
            <>
              <div className="boasVindas">
                <h2>Boas-Vindas a Sua Central Financeira</h2>
                <Button color="green" type="button">
                  <>Adicionar Transação</>
                </Button>
              </div>
            </>
          </BoxMainPage>
          <Warning />
        </Container>
        <Loader active={isLoading} type="padrao" />
      </WelcomeContainer>
    </>
  )
}

export default Welcome
