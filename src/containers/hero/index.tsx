import { useEffect, useState } from 'react'
import FormModel from '../../components/Forms'
import { Container, TitlePrimary } from '../../styles'
import * as S from './styles'
import Button from '../../components/Button'
import {
  usePostLoginMutation,
  usePostUsuarioMutation
} from '../../service/Hooks/userAPI'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import { ToggleButton } from '../../components/ToggleButton'
import Error from '../../components/Error'

const Hero = () => {
  const [formActive, setFromActive] = useState<'login' | 'cadastro'>('login')
  const [formIsActive, setFromIsActive] = useState<boolean>(false)
  const [largura, setLargura] = useState(window.innerWidth)
  const [cadastrar, { isLoading: loadingCadastrar }] = usePostUsuarioMutation()
  const [login, { isLoading: loadingLogin }] = usePostLoginMutation()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState('')
  const navigator = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLogin = async (req: UserLogin, e: React.FormEvent) => {
    e.preventDefault()
    if (req.email == '' || req.password == '') {
      setErro('Todos os campos são obrigatórios')
      return
    }
    try {
      await login(req).unwrap()
      setErro('')
      navigator('/mainPage')
    } catch (err) {
      let msg = 'Erro ao adicionar.'

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setErro(msg)
    }
  }

  const handleCadastro = async (req: User, e: React.FormEvent) => {
    e.preventDefault()
    if (req.email == '' || req.password == '' || req.name == '') {
      setErro('Todos os campos são obrigatórios')
      return
    }
    try {
      await cadastrar(req).unwrap()
      setErro('')
      navigator('/mainPage')
    } catch (err) {
      let msg = 'Erro ao adicionar.'

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setErro(msg)
    }
  }

  return (
    <>
      <S.HeroContainer id="Home">
        <Container>
          <div>
            <TitlePrimary>EasyFinance</TitlePrimary>
            <p>
              Plataforma ideal para gerenciar suas finanças de forma simples e
              eficiente. Organize seu orçamento, acompanhe seus gastos e tome
              decisões financeiras mais assertivas com facilidade e segurança.
            </p>
            {largura < 1024 && (
              <Button
                onClick={() => setFromIsActive(true)}
                color="green"
                type="button"
              >
                <>entrar</>
              </Button>
            )}
          </div>
          {formActive == 'login' ? (
            <FormModel
              isModal={largura < 1024}
              active={formIsActive}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                handleLogin({ email, password }, e)
              }
              title="Login"
              onClose={() => setFromIsActive(false)}
            >
              <>
                <div className="inputDiv">
                  <label htmlFor="email">Email: </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="senha">Senha: </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="senha"
                    id="senha"
                    type="password"
                  />
                </div>
                <Button color="green" type="submit">
                  <>Entrar</>
                </Button>
                <ToggleButton<'login' | 'cadastro'>
                  value={formActive}
                  buttonLeft="login"
                  buttonRight="cadastro"
                  onChange={(v) => setFromActive(v)}
                />
                <Error msg={erro} />
              </>
            </FormModel>
          ) : (
            <FormModel
              active={formIsActive}
              isModal={largura < 1024}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                handleCadastro({ name: userName, email, password }, e)
              }
              onClose={() => setFromIsActive(false)}
              title="Cadastro"
            >
              <>
                <div className="inputDiv">
                  <label htmlFor="userName">Usuario: </label>
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="userName"
                    id="userName"
                    type="text"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="email">Email: </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="senha">Senha: </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="senha"
                    id="senha"
                    type="password"
                  />
                </div>
                <Button color="green" type="submit">
                  <>Entrar</>
                </Button>
                <ToggleButton<'login' | 'cadastro'>
                  value={formActive}
                  buttonLeft="login"
                  buttonRight="cadastro"
                  onChange={(v) => setFromActive(v)}
                />
                <Error msg={erro} />
              </>
            </FormModel>
          )}
        </Container>
      </S.HeroContainer>
      <Loader active={loadingCadastrar || loadingLogin} type="padrao" />
    </>
  )
}

export default Hero
