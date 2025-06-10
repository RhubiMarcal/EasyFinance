import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/gif/principal.gif'
import { useGetMeQuery } from '../../service/Hooks/userAPI'
import Loader from '../../components/Loader'
import Carteira from '../../assets/img/carteira.png'
import BoxMainPage from '../../components/boxMainPage'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import Painel from '../painel'

const Welcome = () => {
  const { data: userData, isLoading } = useGetMeQuery()
  const navigate = useNavigate()

  return (
    <>
      <WelcomeContainer>
        <Container>
          <div>
            <img src={dollar} alt="dollar" />
            <h1>
              <p>Olá {userData?.name}</p>
              <span>É bom te ter de volta.</span>
            </h1>
          </div>
          <BoxMainPage type="hero">
            <>
              <img src={Carteira} alt="" />
              <div className="col">
                <h2>Boas-Vindas a Sua Central Financeira</h2>
                <Button
                  onClick={() =>
                    navigate('/Historico', { state: { formActive: 'add' } })
                  }
                  color="green"
                  type="button"
                >
                  <>Adicionar Transação</>
                </Button>
              </div>
            </>
          </BoxMainPage>
          <Painel />
        </Container>
        <Loader active={isLoading} type="padrao" />
      </WelcomeContainer>
    </>
  )
}

export default Welcome
