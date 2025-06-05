import { Container } from '../../styles'
import { WelcomeContainer } from './styles'
import dollar from '../../assets/gif/principal.gif'
import { useGetMeQuery } from '../../service/api'
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setName } from '../../store/reducers/user'
import { RootReducer } from '../../store'

const Welcome = () => {
  const { data, isLoading } = useGetMeQuery()
  const { nome } = useSelector((state: RootReducer) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.name) {
      dispatch(setName(data.name))
    }
  }, [data, dispatch])

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
      <Loader type="padrao" active={isLoading} />
    </>
  )
}

export default Welcome
